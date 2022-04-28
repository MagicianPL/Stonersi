import { GET_MOVIES_FAILED, GET_MOVIES_SUCCESS } from "../constants/moviesConstants";

export const getMovies = () => async (dispatch: any) => {
    const res = await fetch(`${process.env.REACT_APP_API}/movies`);
    const data = await res.json();

    if (!res.ok) return dispatch({type: GET_MOVIES_FAILED, payload: data.message});

    dispatch({type: GET_MOVIES_SUCCESS, payload: data});
};