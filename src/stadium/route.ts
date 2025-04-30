import { FastifyInstance } from "fastify";
import { GetStadiumsController } from "./controller";
import { authorizeRole } from "../middleware/authorizeRole";

export async function stadiumRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/stadiums",
  //   { 
  //     preHandler: authorizeRole(['user','admin'])
  //   }
  // ,
  GetStadiumsController);
}
