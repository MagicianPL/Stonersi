import { AnyAction } from "redux";
import { SHOW_ADD_COMMENT_FORM, HIDE_ADD_COMMENT_FORM, SEND_COMMENT_REQUEST, SEND_COMMENT_SUCCESS, SEND_COMMENT_FAILED } from "../constants/CommentsConstants";

const addCommentFormReducer = (state = {showAddComment: false, success: null, error: null, loading: false}, action: AnyAction) => {
    switch(action.type) {
        case SHOW_ADD_COMMENT_FORM:
            return {
                showAddComment: true
            };
        case HIDE_ADD_COMMENT_FORM:
            return {
                showAddComment: false
            };
        case SEND_COMMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SEND_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: "Twój komentarz został dodany! Strona zostanie przeładowana..."
            };
        case SEND_COMMENT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    };
};

export default addCommentFormReducer;