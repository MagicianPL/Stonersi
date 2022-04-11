import { HIDE_ADD_COMMENT_FORM, SHOW_ADD_COMMENT_FORM } from "../constants/CommentsConstants";

export const showAddCommentModal = () => (dispatch: any) => {
    dispatch({type: SHOW_ADD_COMMENT_FORM});
};

export const hideCommentModal = () => (dispatch: any) => {
    dispatch({type: HIDE_ADD_COMMENT_FORM});
};