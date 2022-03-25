import { combineReducers } from "redux";
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import availableJointsReducer from "./availableJointsReducer";

const reducers = combineReducers({
    modalReducer,
    userReducer,
    availableJointsReducer,
});

export default reducers;