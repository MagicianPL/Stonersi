import { combineReducers } from "redux";
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import availableJointsReducer from "./availableJointsReducer";
import createNewPostReducer from "./createNewPostReducer";

const reducers = combineReducers({
    modalReducer,
    userReducer,
    availableJointsReducer,
    createNewPostReducer
});

export default reducers;