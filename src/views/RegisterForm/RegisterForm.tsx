import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setModalError, setModalMessage, showModal } from '../../state/actions/modalActions';


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

    //Visibility of modal, message, errorMessage
    const visibleModal = useSelector((state: any) => state.modalReducer.showModal);
    const modalContent = useSelector((state: any) => state.modalReducer.message);
    const modalError = useSelector((state: any) => state.modalReducer.error);


    const navigate = useNavigate();
    const dispatch = useDispatch();
    /*It shows Modal with loading spinner, sends post request, then shows error or good message on Modal, next - redirect to login page*/
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(showModal());
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
            dispatch(setModalError(data.message));
            return;
        } else if (res.ok) {
            dispatch(setModalMessage("Twoje konto zostało poprawnie zarejestrowane - nastąpi przekierowanie na stronę logowania"));
            setInputValues(initialInputValues);
            //Redirect to login page after 3s
            setTimeout(() => {
                navigate("/login");
                dispatch(hideModal());
            }, 3000);
        }
    };
    
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
        <Modal content={modalContent} showModal={visibleModal} error={modalError} />
        </>
    );
};

export default RegisterForm;