import {combineReducers} from 'redux';
import lists from './lists_reducers';

const rootReducer = combineReducers({
    lists
});

export default rootReducer;