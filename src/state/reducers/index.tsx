import { combineReducers } from "redux";
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import availableJointsReducer from "./availableJointsReducer";
import createNewPostReducer from "./createNewPostReducer";
import addCommentFormReducer from "./addCommentFormReducer";
import moviesReducer from "./moviesReducer";

const reducers = combineReducers({
    modalReducer,
    userReducer,
    availableJointsReducer,
    createNewPostReducer,
    addCommentFormReducer,
    moviesReducer
});

export default reducers;