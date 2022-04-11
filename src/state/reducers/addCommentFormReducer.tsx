import { AnyAction } from "redux";
import { SHOW_ADD_COMMENT_FORM, HIDE_ADD_COMMENT_FORM } from "../constants/CommentsConstants";

const addCommentFormReducer = (state = {showAddComment: false}, action: AnyAction) => {
    switch(action.type) {
        case SHOW_ADD_COMMENT_FORM:
            return {
                showAddComment: true
            };
        case HIDE_ADD_COMMENT_FORM:
            return {
                showAddComment: false
            }
        default:
            return state
    };
};

export default addCommentFormReducer;