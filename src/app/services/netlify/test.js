const process = require('process');

const axios = require('axios');
const qs = require('qs');

const handler = async function (event) {
  // apply our function to the queryStringParameters and assign it to a variable
	console.log('object:', qs.stringify(event.queryStringParameters));
  const station = qs.stringify(event.queryStringParameters.station);
  console.log('API_PARAMS', station);
  // Get env var values defined in our Netlify site UI

  // TODO: customize your URL and API keys set in the Netlify Dashboard
  // this is secret too, your frontend won't see this
  const { API_SECRET = 'shiba' } = process.env;
  const URL = `https://avwx.rest/api/metar/KLAX?token=${process.env.avwxKey}`;

  console.log('Constructed URL is ...', URL);
	console.log('API_SECRET:', API_SECRET);
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
	};
	
	// if (event.httpMethod !== 'POST') {
	// 		// To enable CORS
	// 		return {
	// 			statusCode: 200, // <-- Important!
	// 			headers,
	// 			body: 'This was not a POST request!'
	// 		};
	//  }
  try {
    const { data } = await axios.get(URL);
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
			// headers: {
			// 	'Access-Control-Allow-Origin': '*',
			// 	'Access-Control-Allow-Headers': 'Content-Type',
			// 	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
			// },
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { data, headers, status, statusText } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler };
