const url = 'https://motivation-quotes4.p.rapidapi.com/api'
const APIKEY = '38a18087d5msh847ba65c6ef7342p18c4a2jsnd3b3b84c80b7'
const btnhelp = document.querySelector('.helpbtn')

async function fetchMotivationalQuote() {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'motivation-quotes4.p.rapidapi.com',
				'x-rapidapi-key': APIKEY,
			},
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data = await response.json()

		const { author, quote } = data

		document.getElementById('quote').innerHTML = `
          <p class="author"><strong>Author:</strong> ${
						author || 'Unknown'
					}</p>
          <p class="quote"><strong>Quote:</strong> ${quote}</p>
        `
	} catch (error) {
		console.error('Error fetching motivational quote:', error)
		document.getElementById('quote').innerText =
			'Failed to fetch quote. Please try again later.'
	}
}

btnhelp.addEventListener('click', fetchMotivationalQuote)

import { openmodalwindow } from './index.js'

openmodalwindow()
