import { fn, col, where, Op } from 'sequelize';
import Team from './model';

export async function getTeams(
  sportLeagueShortName?: string,
  leagueDivision?: string,
  divisionName?: string
) {
  const filters: any[] = [];

  if (sportLeagueShortName) {
    filters.push(where(fn('LOWER', col('sportLeagueShortName')), sportLeagueShortName.toLowerCase()));
  }

  if (leagueDivision) {
    filters.push(where(fn('LOWER', col('leagueDivision')), leagueDivision.toLowerCase()));
  }

  if (divisionName) {
    filters.push(where(fn('LOWER', col('divisionName')), divisionName.toLowerCase()));
  }

  return Team.findAll({
    where: filters.length ? { [Op.and]: filters } : undefined,
  });
}
