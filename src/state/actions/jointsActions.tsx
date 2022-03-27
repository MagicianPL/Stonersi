import { GET_AVAILABLE_JOINTS } from '../constants/jointsConstants';

export const getJoints = (userId: string) => {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.REACT_APP_API}/availablejoints/${userId}`);
    const data = await res.json();

    if (res.ok) {
        dispatch({type: GET_AVAILABLE_JOINTS, payload: data.joints});
    };
    }
};