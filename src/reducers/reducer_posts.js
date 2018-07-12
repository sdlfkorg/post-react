import _ from 'lodash';
// do not need to specify the file, because import from index.js
import {FETCH_POSTS, FETCH_POST} from '../actions';

export default function(state = {}, action){
	switch (action.type){

		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:
			const post = action.payload.data;
			const newState = {...state};
			newState[post.id] = post;
			return newState;
			// or return {...state, [action.payload.data.id]: action.payload.data};

		default:
			return state;


	}

}