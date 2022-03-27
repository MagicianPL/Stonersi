import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledForm from './StyledForm';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import Modal from '../../components/Modal/Modal';
import { hideModal, setModalError, showModal } from '../../state/actions/modalActions';
import { loginUser } from '../../state/actions/userActions';
import { useNavigate } from 'react-router';


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
    //If visibleModal is falsy - modal is hidden
    //If modalError is not falsy - modal is red
    /****************************/
    const  visibleModal = useSelector((state: any) => state.modalReducer.showModal);
    const modalError = useSelector((state: any) => state.modalReducer.error);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(showModal());
        const res = await fetch(`${process.env.REACT_APP_API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });

        const data = await res.json();

        if (!res.ok) {
            dispatch(setModalError(data.message));
        } else if (res.ok) {
            //TO DO correctly login funcionality
            dispatch(hideModal());
            setInputValues(initialValues);
            dispatch(loginUser(data)) //data is logged user object
            navigate("/");
        }
    }
    return(
        <>
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Zaloguj się</h1>
            <Input id="email" label="Adres e-mail" type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
            <Input id="password" label="Twoje hasło" type="password" name="password" value={inputValues.password} onChange={handleInputChange} />
            <StyledButton center>Zaloguj</StyledButton>
        </StyledForm>
        <Modal showModal={visibleModal} error={modalError} />
        </>
    );
};

export default LoginForm;