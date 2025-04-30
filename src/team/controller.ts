import { FastifyReply, FastifyRequest } from "fastify";
import { GetTeams } from "./service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function GetTeamsController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const { sportLeagueShortName, leagueDivision, divisionName } = request.query as {
        sportLeagueShortName?: string;
        leagueDivision?: string;
        divisionName?: string;
      };
      
      const teams = await GetTeams(sportLeagueShortName, leagueDivision, divisionName);
      
      return reply.code(200).send(teams);      
    } catch (error) {
      console.error("Error getting Teams: ", error);
      await errorMessage(error, listOfErrorCodes, reply);
    }
  }