import { GET_AVAILABLE_JOINTS, LIGHT_A_JOINT_ERROR, LIGHT_A_JOINT_SUCCESS } from '../constants/jointsConstants';

export const getJoints = (userId: string) => {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.REACT_APP_API}/availablejoints/${userId}`);
    const data = await res.json();

    if (res.ok) {
        dispatch({type: GET_AVAILABLE_JOINTS, payload: data.joints});
    };
    }
};

export const lightAJoint = (postId: string) => async (dispatch: any) => {
    const res = await fetch(`${process.env.REACT_APP_API}/posts/lightjoint`);
    const data = await res.json();

    if (!res.ok) {
        dispatch({type: LIGHT_A_JOINT_ERROR, payload: data.message});
    } else {
        dispatch({type: LIGHT_A_JOINT_SUCCESS, payload: "Właśnie przypaliłeś jointa!"});
    };
};