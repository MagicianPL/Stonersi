import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 50px;
    }
`;

const RegisterForm = () => {
    return(
        <Form>
            <h1>Załóż konto</h1>
            <Input id="login" label="Twój login" />
            <Input id="email" label="Adres e-mail" type="email" />
            <Input id="password" label="Twoje hasło" type="password" />
            <Input id="repeatedPassword" label="Powtórz hasło" type="password" />
            <StyledButton center>Zarejestruj</StyledButton>
        </Form>
    );
};

export default RegisterForm;