import { FastifyInstance } from "fastify";
import { GetTeamsController } from "./controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { getTeamsSchema } from "./schema";

export async function teamRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/teams",
    { 
      schema: getTeamsSchema,
      preHandler: authorizeRole(['user','admin'])
    }
  ,GetTeamsController);
}
