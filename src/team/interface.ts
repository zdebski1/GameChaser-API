export interface ITeam {
    teamId: number;
    stadiumFk: number;
    teamShortName: string;
    teamLongName: string;
    sportLeagueShortName: string;
    sportLeagueLongName: string;
    leagueDivision: string;
    divisionName: string;
    createdDate: Date;
    createdBy: number;
    updatedDateTime: Date;
    updatedBy: number;
}