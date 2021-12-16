const process = require('process');
const axios = require('axios');

let metar

const handler = async function (event) {
	const urlParams = new URL(event.rawUrl).searchParams
	console.log('urlParams:', urlParams)
	const report = urlParams.get('report')
	const station = urlParams.get('station')
	console.log(`${process.env.avwxUrl}/${report}/${station}+avwxKey in header`)
	const data = await axios(`${process.env.avwxUrl}/${report}/${station}`, {
			headers: {
			'Authorization': process.env.avwxKey
		}
	}).then((results) => {
		metar = [results.data]
  });

  return {
    statusCode: 200,
    headers: { 
			'content-type': 'application/json',
			'access-control-allow-origin': '*',
			'access-control-allow-methods': 'OPTIONS, HEAD, GET',
			'access-control-allow-headers': 'AUTHORIZATION, CONTENT-TYPE',	
		},
    body: JSON.stringify(metar),
  };
}

module.exports = { handler };
