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