import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import auth from './reducers/auth.reducer';
import user from "./reducers/userProfile.reducer";
import contacts from "./reducers/contacts.reducer";
import subjects from "./reducers/subjects.reducer";
import conversations from "./reducers/conversations.reducer";

const reducer = combineReducers({
    auth: auth,
    user: user,
    contacts: contacts,
    subjects: subjects,
    conversations: conversations
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;