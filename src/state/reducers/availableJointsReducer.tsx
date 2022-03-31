import { AnyAction } from "redux";
import { GET_AVAILABLE_JOINTS, LIGHT_A_JOINT_ERROR, LIGHT_A_JOINT_SUCCESS } from '../constants/jointsConstants';

const availableJointsReducer = (state={}, action: AnyAction) => {
    switch(action.type) {
        case GET_AVAILABLE_JOINTS:
            return {
                joints: action.payload
            };
        case LIGHT_A_JOINT_SUCCESS:
            return {
                ...state,
                message: action.payload,
                error: ""
            };
        case LIGHT_A_JOINT_ERROR:
            return {
                ...state,
                message: "",
                error: action.payload
            }
        default:
            return state;
    }
};

export default availableJointsReducer;