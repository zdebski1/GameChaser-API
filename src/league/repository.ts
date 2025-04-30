import { fn, col} from 'sequelize';
import Team from '../team/model';

export async function getLeagueDivisions() {
  return Team.findAll({
    attributes: [
      [fn('DISTINCT', col('leagueDivision')), 'leagueDivision']
    ],
    raw: true
  });
}

export async function getLeagueDivisionNames() {
  return Team.findAll({
    attributes: [
      [fn('DISTINCT', col('divisionName')), 'divisionName']
    ],
    raw: true
  });
}

export async function getLeagues() {
  return Team.findAll({
    attributes: [
      [fn('DISTINCT', col('sportLeagueShortName')), 'sportLeagueShortName']
    ],
    raw: true
  });
}