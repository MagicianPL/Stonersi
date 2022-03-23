import React, { useState } from 'react';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import Modal from '../../components/Modal/Modal';


const LoginForm = () => {
    //Input values
    const initialValues = {
        email: "",
        password: ""
    };
    const [inputValues, setInputValues] = useState(initialValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    /**** MODAL  ****/
    //Props for Modal
    //If modalContent is falsy - modal is hidden
    //If errorMessage is not falsy - modal is red
    const [showModal, setShowModal] = useState(false);
    const [modalErrorMessage, setModalErrorMessage] = useState("");

    const hideModal = () => {
        setShowModal(false);
        setModalErrorMessage("");
    }
    /****************************/

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValues);
        setShowModal(true);
    }
    return(
        <>
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Zaloguj się</h1>
            <Input id="email" label="Adres e-mail" type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
            <Input id="password" label="Twoje hasło" type="password" name="password" value={inputValues.password} onChange={handleInputChange} />
            <StyledButton center>Zaloguj</StyledButton>
        </StyledForm>
        <Modal content="" showModal={showModal} hideModal={hideModal} />
        </>
    );
};

export default LoginForm;