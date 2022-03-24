import { combineReducers } from "redux";
import modalReducer from './modalReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
    modalReducer,
    userReducer,
});

export default reducers;