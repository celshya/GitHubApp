// src/store/index.js
import { legacy_createStore as createStore, combineReducers } from 'redux';
import followerReducer from '../reducers/followerReducer';
import repositoryReducer from '../reducers/repositoryReducer';
import userReducer from '../reducers/userReducer';
const rootReducer = combineReducers({
  followers: followerReducer,
  repositories: repositoryReducer,
  userData: userReducer
  
});

const store = createStore(rootReducer);

export default store;
