import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import Modal from '../../components/Modal/Modal';


const RegisterForm = () => {
    const initialInputValues = {
        login: "",
        email: "",
        password: "",
        repeatedPassword: ""
    };

    const [inputValues, setInputValues] = useState(initialInputValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate();
    /*It shows Modal with loading spinner, sends post request, then shows error or good message on Modal*/
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowModal(true);
        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });

        const data = await res.json();
        
        //If response is not ok and we've got an error message from the server
        if (!res.ok) {
            setModalErrorMessage(data.message);
            return;
        } else if (res.ok) {
            setModalContent("Twoje konto zostało poprawnie zarejestrowane - nastąpi przekierowanie na stronę logowania");
            //Redirect to login page after 4s
            setTimeout(() => {
                navigate("/login");
                setShowModal(false);
            }, 4000);
        }
    };

    //Clearing inputs and modal content when user closes modal
    const clearData = (error: string) => {
        setModalContent("");
        //If user is registered correctly there is no error message, so clear input values
        if (!error) {
            setInputValues(initialInputValues);
        }
        setModalErrorMessage("");
    };

    //Props for Modal
    //If modalContent is falsy - modal is hidden
    //If errorMessage is not falsy - modal is red
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalErrorMessage, setModalErrorMessage] = useState("");
    const hideModal = () => {
        setShowModal(false);
        clearData(modalErrorMessage);
    }

    return(
        <>
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Załóż konto</h1>
            <Input id="login" label="Twój login" name="login" value={inputValues.login} onChange={handleInputChange} />
            <Input id="email" label="Adres e-mail" type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
            <Input id="password" label="Twoje hasło" type="password" name="password" value={inputValues.password} placeholder="Minimum 6 znaków" onChange={handleInputChange} />
            <Input id="repeatedPassword" label="Powtórz hasło" type="password" name="repeatedPassword" value={inputValues.repeatedPassword} onChange={handleInputChange} />
            <StyledButton center>Zarejestruj</StyledButton>
        </StyledForm>
        <Modal content={modalContent} showModal={showModal} error={modalErrorMessage} hideModal={hideModal} />
        </>
    );
};

export default RegisterForm;