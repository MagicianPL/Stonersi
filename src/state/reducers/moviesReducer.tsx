import { AnyAction } from "redux";
import { GET_MOVIES_FAILED, GET_MOVIES_SUCCESS } from "../constants/moviesConstants";

const moviesReducer = (state = { isLoading: true }, action: AnyAction) => {
    switch(action.type) {
        case GET_MOVIES_SUCCESS:
            return {
                isLoading: false,
                movies: action.payload
            };
        
        case GET_MOVIES_FAILED:
            return {
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default moviesReducer;