import React from 'react';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';



const LoginForm = () => {
    return(
        <StyledForm>
            <h1>Zaloguj się</h1>
            <Input id="email" label="Adres e-mail" type="email" />
            <Input id="password" label="Twoje hasło" type="password" />
            <StyledButton center>Zaloguj</StyledButton>
        </StyledForm>
    );
};

export default LoginForm;