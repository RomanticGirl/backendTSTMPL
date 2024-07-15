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
        handler: async (req, reply) => {
            const baseService = new BaseService();
            return reply.send(JSON.stringify((await baseService.create(req.body))));
        },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        },
                        title: {
                            type: 'string'
                        },
                        author: {
                            type: 'string'
                        },
                        publicationDate: {
                            type: 'string'
                        },
                        genres: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    },
    {
        method: "GET",
        url: '/books',
        handler: async (req, reply) => {
            const baseService = new BaseService();
            return reply.send(JSON.stringify((await baseService.getAll())));
        },
        schema: {
            response: {
                200: {
                    type: 'array',
                    properties: {
                        books: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'number'
                                },
                                title: {
                                    type: 'string'
                                },
                                author: {
                                    type: 'string'
                                },
                                publicationDate: {
                                    type: 'string'
                                },
                                genres: {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    {
        method: "GET",
        url: '/books/:id',
        handler: async (req, reply) => {
            const baseService = new BaseService();
            return reply.send(JSON.stringify((await baseService.getById(req.params))));
        },
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        },
                        title: {
                            type: 'string'
                        },
                        author: {
                            type: 'string'
                        },
                        publicationDate: {
                            type: 'string'
                        },
                        genres: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
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