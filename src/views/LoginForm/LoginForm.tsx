import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import Modal from '../../components/Modal/Modal';
import { showModal } from '../../state/actions/modalActions';


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
    /****************************/
    const  visibleModal = useSelector((state: any) => state.modalReducer.showModal);

    const dispatch = useDispatch();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(visibleModal);
        dispatch(showModal());
    }
    return(
        <>
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Zaloguj się</h1>
            <Input id="email" label="Adres e-mail" type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
            <Input id="password" label="Twoje hasło" type="password" name="password" value={inputValues.password} onChange={handleInputChange} />
            <StyledButton center>Zaloguj</StyledButton>
        </StyledForm>
        <Modal showModal={visibleModal} content="xxx" />
        </>
    );
};

export default LoginForm;