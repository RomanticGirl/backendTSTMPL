import { BaseService } from "../base/base.service";

export class BooksService extends BaseService {
    tableName: string;
    constructor() {
        super();
        this.tableName = "Books";
    }
    // Добавление книги
    async createBook() {
        
    }
    // Получение списка книг
    async getAllBooks() {

    }
    // Получение книги по ID
    async getBookById(id: number) {

    }
    // Обновление информации о книге
    async updateBook() {

    }
    // Удаление книги
    async deleteBook() {

    }


}