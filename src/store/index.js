// src/store/index.js
import { legacy_createStore as createStore, combineReducers } from 'redux';
import followerReducer from '../reducers/followerReducer';
import repositoryReducer from '../reducers/repositoryReducer';

const rootReducer = combineReducers({
  followers: followerReducer,
  repositories: repositoryReducer,
  // Add more reducers if you have them
});

const store = createStore(rootReducer);

export default store;
