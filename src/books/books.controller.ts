import { BaseService } from "../base/base.service"
import { Route } from "./books.model"



export const route: Route = {
    method: "GET",
    url: '/login',
    handler: () => { return { login: 'it logged!' } },
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    login: {
                        type: 'string'
                    }
                }
            }
        }
    },
}

export const bookRoutes: Route[] = [
    {
        method: "POST",
        url: '/books',
        handler: (req, reply) => {
            return reply.send({
                '1. Добавление книги HTTP метод': 'POST',
                'Эндпоинт': '/books',
                'Тело запроса': 'JSON с полями title, author, publicationDate, genres',
                'Ответ': 'JSON с данными добавленной книги',
                'Требует аутентификации': '(только для пользователей с ролью "администратор")'
            })
        },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        '1. Добавление книги HTTP метод': {
                            type: 'string'
                        },
                        'Эндпоинт': {
                            type: 'string'
                        },
                        'Тело запроса': {
                            type: 'string'
                        },
                        'Ответ': {
                            type: 'string'
                        },
                        'Требует аутентификации': {
                            type: 'string'
                        },
                    }
                }
            }
        },
    },
    {
        method: "GET",
        url: '/books',
        handler: async (req, reply) => {
            const baseService = new BaseService();
            return reply.send(JSON.stringify((await baseService.getAll()).rows));
        },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        books: {
                            type: 'string'
                        }
                    }
                }
            }
        },
    },
    {
        method: "GET",
        url: '/books/:id',
        handler: () => { return { books: 'BOOKS GET BY ID!' } },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        books: {
                            type: 'string'
                        }
                    }
                }
            }
        },
    },
    {
        method: "PUT",
        url: '/books/:id',
        handler: () => { return { books: 'BOOKS UPDATE BY ID!' } },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        books: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    },
    {
        method: "DELETE",
        url: '/books/:id',
        handler: () => { return { books: 'BOOK DELETE BY ID!' } },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        books: {
                            type: 'string'
                        }
                    }
                }
            }
        },
    }

]