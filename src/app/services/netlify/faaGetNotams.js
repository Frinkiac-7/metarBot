const axios = require('axios');
const { url } = require('inspector');
const process = require('process');

const handler = async function (event) {
	const urlParams = new URL(event.rawUrl).searchParams
	console.log('urlParams:', urlParams)
	const pageSize = urlParams.get('pageSize')
	const classification = urlParams.get('classification')

	try {
		let notams
		console.log('url:', `${event.rawUrl}`)
		let url = ''
		if (classification === 'ALL') {
			url = `?notamType=N&pageSize=${pageSize}`
		} else {
			url = `?classification=${classification}&notamType=N&pageSize=${pageSize}`
		}
		const data = await axios(`${process.env.faaUrl}${url}`, {
				headers: {
			'content-type': 'application/json',
			'client_id': process.env.faaClientId,
			'client_secret': process.env.faaClientSecret
			}
		}).then((results) => {
			notams = results.data
		})

		return {
			statusCode: 200,
			headers: {
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
				'access-control-allow-methods': 'OPTIONS, HEAD, GET',
				'access-control-allow-headers': 'AUTHORIZATION, CONTENT-TYPE',
			},
			body: JSON.stringify(notams),
		};
	} catch (err) {
		// console.log('err:', err)

		return {
			statusCode: 401,
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
