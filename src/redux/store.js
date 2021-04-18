import {createStore, combineReducers} from 'redux';
import auth from './reducers/auth.reducer';
const reducer = combineReducers({
    auth: auth,
});

const store = createStore(reducer);

export default store;