import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { bookRoutes, route } from './src/books/books.controller'

const server: FastifyInstance = Fastify({})

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

server.get('/ping', opts, async (request, reply) => {
    return { pong: 'it worked!' }
})

server.register(function (app, _, done) {
    app.get('/users', () => { return { users: 'users!' } })
    app.route(route)
    bookRoutes.forEach(route => app.route(route))
    done()
}, { prefix: '/v1' }) // global route prefix

const start = async () => {
    try {
        await server.listen({ port: 3000 })
        const address = server.server.address()
        const port = typeof address === 'string' ? address : address?.port
        console.log(`listening on port ${port}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()