
import axios from 'axios'
const API_KEY='1c79b155acacc0a29a5e02847cb5558a';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){

	const url =`${ROOT_URL}&q=${city},us`;

	const request = axios.get(url); //return a promise

	console.log("request",request)

	return {


		type: FETCH_WEATHER,
		payload: request
	}
}


//http://api.openweathermap.org/data/2.5/forecast?appid=1c79b155acacc0a29a5e02847cb5558a&q=Boston,us