import { HttpError } from "../utils/httpError";
import { getTeams } from "./repository";

export async function GetTeams(
  sportLeagueShortName?: string,
  leagueDivision?: string,
  divisionName?: string
) {
  try {
    const teams = await getTeams(sportLeagueShortName, leagueDivision, divisionName);

    return teams.map(team => ({
      teamId: team.teamId,
      stadiumFk: team.stadiumFk,
      teamShortName: team.teamShortName,
      teamLongName: team.teamLongName,
      sportLeagueShortName: team.sportLeagueShortName,
      sportLeagueLongName: team.sportLeagueLongName,
      leagueDivision: team.leagueDivision,
      divisionName: team.divisionName,
    }));
  } catch (error) {
    console.error("Error fetching Teams", error);
    throw new HttpError("Error fetching Teams", 404);
  }
}
