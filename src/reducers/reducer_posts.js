import _ from 'lodash';
// do not need to specify the file, because import from index.js
import FETCH_POSTS from '../actions';

export default function(state = {}, action){
	switch (action.type){

		case FETCH_POSTS:
			console.log(action.payload.data);
			return _.mapKeys(action.payload.data, 'id')


		default:
			return state;

	}

}