// Third Parties
import { Handler } from '@netlify/functions';

// Libs
import { getRobots } from '@giant-robots/shared/backend';

const handler: Handler = async (event, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTION',
    },
    statusCode: 200,
    body: JSON.stringify(getRobots()),
  };
};

export { handler };
