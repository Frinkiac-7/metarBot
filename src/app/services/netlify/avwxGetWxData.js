const axios = require('axios');
const process = require('process');
const sjs = require('@supabase/supabase-js')

const supabase = sjs.createClient(`${process.env.supabaseUrl}`, `${process.env.supabaseKey}`)

const handler = async function (event) {
	const urlParams = new URL(event.rawUrl).searchParams
	const session = urlParams.get('session')
	const report = urlParams.get('report')
	const station = urlParams.get('station')
	const userInfo = await supabase.auth.api.getUser(session)

	
	if (!userInfo.error) {
		let metar
		console.log('userInfo:', userInfo)
		console.log('USER STATUS: Authorized')
		const data = await axios(`${process.env.avwxUrl}/${report}/${station}`, {
				headers: {
				'Authorization': process.env.avwxKey
			}
		}).then((results) => {
			metar = results.data
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
	} else {
		console.log('userInfo:', userInfo)
		console.log('USER STATUS:  UNAUTHORIZED')
		return {
			statusCode: 401,
			headers: { 
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
				'access-control-allow-methods': 'OPTIONS, HEAD, GET',
				'access-control-allow-headers': 'AUTHORIZATION, CONTENT-TYPE',	
			},
			body: JSON.stringify('USER STATUS:  UNAUTHORIZED'),
		};
	}
	
}

module.exports = { handler };
