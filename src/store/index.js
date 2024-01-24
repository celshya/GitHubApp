
import { legacy_createStore as createStore } from 'redux';
import repositoryReducer from '../reducers/repositoryReducer';

const store = createStore(repositoryReducer);

export default store;
