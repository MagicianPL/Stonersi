import { AnyAction } from "redux";
import { GET_AVAILABLE_JOINTS } from '../constants/jointsConstants';

const availableJointsReducer = (state={}, action: AnyAction) => {
    switch(action.type) {
        case GET_AVAILABLE_JOINTS:
            return {
                joints: action.payload
            };
        default:
            return state;
    }
};

export default availableJointsReducer;