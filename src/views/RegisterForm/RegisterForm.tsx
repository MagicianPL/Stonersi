import React from 'react';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';



const RegisterForm = () => {
    return(
        <StyledForm>
            <h1>Załóż konto</h1>
            <Input id="login" label="Twój login" />
            <Input id="email" label="Adres e-mail" type="email" />
            <Input id="password" label="Twoje hasło" type="password" />
            <Input id="repeatedPassword" label="Powtórz hasło" type="password" />
            <StyledButton center>Zarejestruj</StyledButton>
        </StyledForm>
    );
};

export default RegisterForm;