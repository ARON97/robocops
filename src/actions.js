// constant
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => {
	// dispatch the pending action
	dispatch({ type: REQUEST_ROBOTS_PENDING })
	// Asynchronous, do a fetch call to the API
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json()) // JSON method on the response
		// receive data and dispatch the success request and the payload is the data we receive from the payload
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })) 
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })) // if an error occured
}