import { AnyAction } from "redux";
import { CREATE_NEW_POST } from "../constants/postsConstants";

const createNewPostReducer = (state: any = {}, action: AnyAction) => {
    switch(action.type) {
        case CREATE_NEW_POST:
            return state;
        default:
            return state;
    }
};

export default createNewPostReducer;