import { LOGIN_USER_SUCCESS } from "../constants/userConstants";
import { setModalError, setModalMessage, showModal } from "./modalActions";

export const registerUser = async (inputValues = {}) => {
    showModal();
    const res = await fetch('http://localhost:5000/api/register', {
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
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}