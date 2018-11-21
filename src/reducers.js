// constants
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateState = {
	searchField: ''
}

export const searchRobots = (state=initialStateState, action={}) => {
	// console.log(action.type) // logging the actions to see what the user inputs
	switch(action.type) {
		// if CHANGE_SEARCH_FIELD happened
		case CHANGE_SEARCH_FIELD:
			/**
			 * A new state. That is going to have everything in the state and we going to update
			 *  whatever searchField property with action.payload
			 */
			return Object.assign({}, state, { searchField:action.payload })
		default: 
			return state;
	}
}

const initialStateRobots = {
	// 3 States of requesting
	// not pending
	isPending: false,
	// empty robots array
	robots: [],
	// error
	error: ''
}

/* 
 * request reducer that accepts the state which is the initial state
 * and the action that has a default empty object
*/
export const requestRobots = (state = initialStateRobots, action = []) => {
	// listening to action.type
	switch(action.type) {
		// if the state is pending
		case REQUEST_ROBOTS_PENDING:
			// an empty object, the state and a newly created state called isPending
			return Object.assign({}, state, { isPending: true })
		// if the state is success
		case REQUEST_ROBOTS_SUCCESS:
			// an empty object, the state and new property robots that is action.payload and no more pending state
			return Object.assign({}, state, { robots: action.payload, isPending: false })
		// when there is an error
		case REQUEST_ROBOTS_FAILED:
			// an empty object, the state 
			return Object.assign({}, state, { error: action.payload, isPending: false })
		// return the state if it does not match any of the criteria
		default:
			return state;
	}
}