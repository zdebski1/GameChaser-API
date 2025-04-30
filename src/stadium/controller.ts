import { FastifyReply, FastifyRequest } from "fastify";
import { GetStadiums, GetStadiumsFromGoogleSheets } from "./service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function GetStadiumsController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const stadiums = await GetStadiums();
      return reply.code(200).send(stadiums);      
    } catch (error) {
      console.error("Error getting Stadiums: ", error);
      await errorMessage(error, listOfErrorCodes, reply);
    }
  }

  export async function GetStadiumsFromGoogleSheetsController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const stadiums = await GetStadiumsFromGoogleSheets();
      return reply.code(200).send(stadiums);      
    } catch (error) {
      console.error("Error getting Stadiums: ", error);
      await errorMessage(error, listOfErrorCodes, reply);
    }
  }