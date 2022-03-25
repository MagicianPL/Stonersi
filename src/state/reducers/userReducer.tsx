import { AnyAction } from "redux";
import { LOGIN_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants"

const reducer = (state = {}, action: AnyAction) => {
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
                }
        default:
            return state;
    }
};

export default reducer;