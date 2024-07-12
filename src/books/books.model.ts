import { HTTPMethods, FastifyRequest, FastifyReply, FastifySchema } from "fastify"

export type Route = {
    method: HTTPMethods | HTTPMethods[],
    url: string,
    handler: (request: FastifyRequest, reply: FastifyReply) => any,
    schema?: FastifySchema
}