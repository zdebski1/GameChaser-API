import { HttpError } from "../utils/httpError";
import { getStadiums, getStadiumsFromGoogleSheets } from "./repository";

export async function GetStadiums() {
  try {
    const stadiums = await getStadiums();

    return stadiums.map(stadium => ({
      stadiumId: stadium.stadiumId,
      stadiumName: stadium.stadiumName,
      stadiumCity: stadium.stadiumCity,
      stadiumState: stadium.stadiumState,
      stadiumLongitude: stadium.stadiumLongitude,
      stadiumLatitude: stadium.stadiumLatitude,
      stadiumAddress: stadium.stadiumAddress,
    }));
  } catch (error) {
    console.error("Error fetching Stadiums", error);
    throw new HttpError("Error fetching Stadiums", 404);
  }
}

export async function GetStadiumsFromGoogleSheets() {
  try {
    const stadiums = await getStadiumsFromGoogleSheets();

    return stadiums;
    
  } catch (error) {
    console.error("Error fetching Stadiums", error);
    throw new HttpError("Error fetching Stadiums", 404);
  }
}