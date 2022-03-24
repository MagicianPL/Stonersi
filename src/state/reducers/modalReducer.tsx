import { AnyAction } from "redux";
import { HIDE_MODAL, SET_MODAL_ERROR, SET_MODAL_MESSAGE, SHOW_MODAL } from "../constants/modalConstants";

const reducer = (state = {showModal: false}, action: AnyAction) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true
            };
        case HIDE_MODAL:
            return {
                ...state,
                showModal: false,
                message: "",
                error: "",
            };
        case SET_MODAL_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        case SET_MODAL_ERROR:
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    }
};

export default reducer;