import { HttpError } from "../utils/httpError";
import { getLeagueDivisionNames, getLeagueDivisions, getLeagues } from "./repository";

export async function GetLeagueDivisions() {
  try {
    const leagueDivisions = await getLeagueDivisions();

    return leagueDivisions.map(leagueDivision => ({
      leagueDivision: leagueDivision.leagueDivision
    }));
  } catch (error) {
    console.error("Error fetching League Divisions", error);
    throw new HttpError("Error fetching League Divisions", 404);
  }
}

export async function GetLeagueDivisionNames() {
  try {
    const leagueDivisionNames = await getLeagueDivisionNames();

    return leagueDivisionNames.map(leagueDivisionName => ({
      divisionName: leagueDivisionName.divisionName
    }));
  } catch (error) {
    console.error("Error fetching League Division Names", error);
    throw new HttpError("Error fetching League Division Names", 404);
  }
}

export async function GetLeagues() {
  try {
    const leagues = await getLeagues();

    return leagues.map(league => ({
      sportLeagueShortName: league.sportLeagueShortName
    }));
  } catch (error) {
    console.error("Error fetching League", error);
    throw new HttpError("Error fetching League", 404);
  }
}