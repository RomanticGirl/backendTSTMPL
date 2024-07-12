import { Pool } from "pg";

class UsersService {
    private pool: Pool;
    constructor() {
        this.pool = new Pool();
    }
    // Регистрация пользователя
    async createUser() {
        this.pool.connect();
        this.pool.query("");
        this.pool.end();
    }
    // Аутентификация пользователя
    async login() {
        this.pool.query("");
    }
    // Получение информации о текущем пользователе
    async getUserById(id: number) {
        this.pool.query("");
    }
    // Изменение роли пользователя
    async changeRole() {
        this.pool.query("");
    }
}