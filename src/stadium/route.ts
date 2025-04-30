import { FastifyInstance } from "fastify";
import { GetStadiumsController, GetStadiumsFromGoogleSheetsController } from "./controller";
import { authorizeRole } from "../middleware/authorizeRole";

export async function stadiumRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/stadiums",
  //   { 
  //     preHandler: authorizeRole(['user','admin'])
  //   }
  // ,
  GetStadiumsController);

  fastify.get(
    "/stadiums/google",
  //   { 
  //     preHandler: authorizeRole(['user','admin'])
  //   }
  // ,
  GetStadiumsFromGoogleSheetsController);
}
