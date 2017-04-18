import { createStore, applyMiddleware } from 'redux';
import mapReducer from './reducers/mapReducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore( 
	mapReducer,
	applyMiddleware(createLogger({collapsed: true}), thunkMiddleware)
);

export default store;
