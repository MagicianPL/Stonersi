import { AnyAction } from "redux";
import { LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILED, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants"

const initialState = {
    user: localStorage.getItem('stonersiUser') ? JSON.parse(localStorage.getItem('stonersiUser') || '{}') : null
};

const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return state;
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                content: action.payload
            };
        case REGISTER_USER_FAILED:
            return {
                ...state,
                error: action.payload
            };

            case LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    user: action.payload
                };
            case LOGOUT_USER:
                return {};
        default:
            return state;
    }
};

export default reducer;