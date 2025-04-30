import { FastifyReply, FastifyRequest } from "fastify";
import { GetLeagueDivisionNames, GetLeagueDivisions, GetLeagues } from "./service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function GetLeagueDivisionsController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      return reply.code(200).send(await GetLeagueDivisions());      
    } catch (error) {
      console.error("Error Getting League Divisions: ", error);
      await errorMessage(error, listOfErrorCodes, reply);
    }
  }

  export async function GetLeagueDivisionNamesController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      return reply.code(200).send(await GetLeagueDivisionNames());      
    } catch (error) {
      console.error("Error Getting League Division Names: ", error);
      await errorMessage(error, listOfErrorCodes, reply);
    }
  }

  export async function GetLeaguesController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      return reply.code(200).send(await GetLeagues());      
    } catch (error) {
      console.error("Error Getting Leagues: ", error);
      await errorMessage(error, listOfErrorCodes, reply);
    }
  }