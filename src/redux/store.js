import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import auth from './reducers/auth.reducer';
import user from "./reducers/getUserProfile.reducer";
const reducer = combineReducers({
    auth: auth,
    user: user,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;