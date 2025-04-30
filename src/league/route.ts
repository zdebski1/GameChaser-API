import { FastifyInstance } from "fastify";
import { GetLeagueDivisionNamesController, GetLeagueDivisionsController, GetLeaguesController } from "./controller";
import { authorizeRole } from "../middleware/authorizeRole";

export async function leagueRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/teams/leagueDivisions",
    { 
      preHandler: authorizeRole(['user','admin'])
    }
  ,GetLeagueDivisionsController);

  fastify.get(
    "/teams/leagueDivisionNames",
    { 
      preHandler: authorizeRole(['user','admin'])
    }
  ,GetLeagueDivisionNamesController); 

  fastify.get(
    "/teams/leagues",
    { 
      preHandler: authorizeRole(['user','admin'])
    }
  ,GetLeaguesController);  

}
