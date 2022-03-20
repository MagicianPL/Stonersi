import React, { useState } from 'react';
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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return(
        <>
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Załóż konto</h1>
            <Input id="login" label="Twój login" name="login" value={inputValues.login} onChange={handleInputChange} />
            <Input id="email" label="Adres e-mail" type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
            <Input id="password" label="Twoje hasło" type="password" name="password" value={inputValues.password} onChange={handleInputChange} />
            <Input id="repeatedPassword" label="Powtórz hasło" type="password" name="repeatedPassword" value={inputValues.repeatedPassword} onChange={handleInputChange} />
            <StyledButton center>Zarejestruj</StyledButton>
        </StyledForm>
        <Modal content="" showModal={true} error="error"/>
        </>
    );
};

export default RegisterForm;