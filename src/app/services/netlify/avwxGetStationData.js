const axios = require('axios');
const process = require('process');
const sjs = require('@supabase/supabase-js');

const supabase = sjs.createClient(`${process.env.supabaseUrl}`, `${process.env.supabaseKey}`)

const handler = async function (event) {
	const urlParams = new URL(event.rawUrl).searchParams
	const session = urlParams.get('session')
	const station = urlParams.get('station')
	const userInfo = await supabase.auth.api.getUser(session)
	
	try {
		let avwxResponse
		const data = await axios(`${process.env.avwxUrl}/station/${station}`, {
				headers: {
				'Authorization': process.env.avwxKey
			}
		}
		).then((results) => {
			avwxResponse = results.data
		});
	
		return {
			statusCode: 200,
			headers: { 
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
				'access-control-allow-methods': 'OPTIONS, HEAD, GET',
				'access-control-allow-headers': 'AUTHORIZATION, CONTENT-TYPE',	
			},
			body: JSON.stringify(avwxResponse),
		};
	} catch(err) {
		const errorResponse = {
			status: err.response.status,
			data: err.response.data
		}
		return {
			statusCode: err.response.status,
			headers: { 
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
				'access-control-allow-methods': 'OPTIONS, HEAD, GET',
				'access-control-allow-headers': 'AUTHORIZATION, CONTENT-TYPE',	
			},
			body: JSON.stringify(errorResponse),
		};
	}

}

module.exports = { handler };
