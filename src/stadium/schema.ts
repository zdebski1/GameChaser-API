export const getTeamsSchema = {
    querystring: {
      type: 'object',
      properties: {
        sportLeagueShortName: { type: 'string' },
        leagueDivision: { type: 'string' },
        divisionName: { type: 'string' },        
      },
      required: [],
    },
  };