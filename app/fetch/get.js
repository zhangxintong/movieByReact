import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
	var result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	});

	return result;
}
export function getData(url) {
	var result = fetch(url, {
		method: "POST",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			'Accept': 'application/json, text/plain, */*'
		}
	})

}