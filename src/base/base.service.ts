import { Pool } from "pg";
import dotenv from "dotenv"

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
    async create() {

    }
    public async getAll() {
        const test = await this.pool.query(`SELECT * FROM testtest`);
        return test;
    }
    async getById(id: number) {

    }
    async update() {

    }
    async delete() {

    }
}