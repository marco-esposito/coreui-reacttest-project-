import { combineReducers } from 'redux';

import postsReducer from './reducer_posts';

const rootReducer = combineReducers({
  postsState: postsReducer,
});

export default rootReducer;