import { HIDE_MODAL, SET_MODAL_ERROR, SET_MODAL_MESSAGE, SHOW_MODAL } from "../constants/modalConstants";

export const showModal = () => {
    return {type: SHOW_MODAL};
};

export const hideModal = () => {
    return (dispatch: any) => dispatch({type: HIDE_MODAL});
};

export const setModalMessage = (message: string) => {
    return (dispatch: any) => dispatch({type: SET_MODAL_MESSAGE, payload: message});
};

export const setModalError = (error: string) => {
    return (dispatch: any) => dispatch({type: SET_MODAL_ERROR, payload: error});
};