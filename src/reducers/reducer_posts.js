import { FETCH_POSTS } from '../actions/index';

// 'all' is an array of all posts
// 'post' is the active post
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }; // this is the ES6 for state.concat([action.payload.data])
      break;
    default:
      return state;
  }
}
