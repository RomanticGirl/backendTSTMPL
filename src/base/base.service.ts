import { Pool } from "pg";
import dotenv from "dotenv"
import { CreateBook } from "../books/dto/CreateBook.dto";
import { SearchParams } from "../books/dto/SearchParams";

export class BaseService {
    private pool: Pool;
    constructor() {
        dotenv.config();
        this.pool = new Pool({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });
    }

    async createTable() {
        this.pool.query(`CREATE TABLE IF NOT EXISTS public.books ( 
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publicationDate DATE NOT NULL,
            genres VARCHAR(255)[] NOT NULL
        )`);
    }

    async create(body: CreateBook | any) {
        try {
            if (!body.publicationDate) {
                body.publicationDate = new Date().toISOString();
            }
            let values = '';
            let fullFields = '';
            for (let i = 0; i < Object.entries(body).length; i++) {
                fullFields += Object.entries(body)[i][0] + ","
                if (Array.isArray(Object.entries(body)[i][1])) {
                    values += "'{" + Object.entries(body)[i][1] + "}',";
                } else {
                    values += "('" + Object.entries(body)[i][1] + "'),";
                }
            }
            values = values.slice(0, -1);
            values = values.replaceAll("''", "null");
            fullFields = fullFields.slice(0, -1);
            const book = await this.pool.query(`INSERT INTO public.books(
                ${fullFields})
                VALUES (${values});`);
            return book;
        } catch (err) {
            if (err instanceof Error && err.message.includes('public.books')) {
                await this.createTable();
                await this.create(body);
            }
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
    public async getAll() {
        try {
            const books = await this.pool.query(`SELECT * FROM public.books`);
            return books.rows;
        } catch (err) {
            if (err instanceof Error && err.message.includes('public.books')) {
                await this.createTable();
                return [];
            }
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
    async getById(searchParams: SearchParams | any) {
        try {
            const book = await this.pool.query(`SELECT * FROM public.books WHERE id=${searchParams.id}`);
            return book.rows;
        } catch (err) {
            if (err instanceof Error && err.message.includes('public.books')) {
                await this.createTable();
                return {};
            }
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
    async update(searchParams: SearchParams | any) {

    }
    async delete(searchParams: SearchParams | any) {

    }
}