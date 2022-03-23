import React, { useState } from 'react';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';



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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValues);
    }
    return(
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Zaloguj się</h1>
            <Input id="email" label="Adres e-mail" type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
            <Input id="password" label="Twoje hasło" type="password" name="password" value={inputValues.password} onChange={handleInputChange} />
            <StyledButton center>Zaloguj</StyledButton>
        </StyledForm>
    );
};

export default LoginForm;