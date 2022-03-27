import { LOGIN_USER_SUCCESS, LOGOUT_USER } from "../constants/userConstants";
import { setModalError, setModalMessage, showModal } from "./modalActions";

export const registerUser = async (inputValues = {}) => {
    showModal();
    const res = await fetch(`${process.env.REACT_APP_API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });
    const data = await res.json();

    if (!res.ok) {
        setModalError(data.message);
    } else if (res.ok) {
        setModalMessage("Konto zostało zarejestrowane - za chwilę nastąpi przekierowanie na stronę logowania");
    }
};

export const loginUser = (user: any) => {
    localStorage.setItem('stonersiUser', JSON.stringify(user));
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}

export const logoutUser = () => {
    localStorage.removeItem('stonersiUser');
    return {
        type: LOGOUT_USER
    }
}