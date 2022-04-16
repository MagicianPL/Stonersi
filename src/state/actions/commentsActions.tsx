import { HIDE_ADD_COMMENT_FORM, SEND_COMMENT_FAILED, SEND_COMMENT_REQUEST, SEND_COMMENT_SUCCESS, SHOW_ADD_COMMENT_FORM } from "../constants/CommentsConstants";

export const showAddCommentModal = () => (dispatch: any) => {
    dispatch({type: SHOW_ADD_COMMENT_FORM});
};

export const hideCommentModal = () => (dispatch: any) => {
    dispatch({type: HIDE_ADD_COMMENT_FORM});
};


//For sending new comment
export const createNewComment = (commentData: {
    author: String | null
    content: String
    postId: String
}, token: String) => async (dispatch: any) => {

    dispatch({type: SEND_COMMENT_REQUEST});
    const res = await fetch(`${process.env.REACT_APP_API}/comments`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
          body: JSON.stringify(commentData)
    });
    const data = await res.json();

    if(!res.ok) {
        return dispatch({type: SEND_COMMENT_FAILED, payload: data.message});
    };

    dispatch({type: SEND_COMMENT_SUCCESS});
    setTimeout(() => {
        window.location.reload();
    }, 3000)
};