import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

    form {
        background: white;
        border-radius: 8px;
        padding: 15px 10px;
        width: 100%;
        max-width: 800px;

        h1 {
            text-align: center;
            margin-bottom: 25px;
            background: rgba(0, 0, 0, 0.1);
            padding: 5px 0;
            border-radius: 4px;
        }
    }
`;

const AddCommentForm = () => {
    return(
        <StyledWrapper>
            <form>
                <h1>Dodaj komentarz</h1>
                <Input id="comment" label="Twój komentarz" />
            </form>
        </StyledWrapper>
    );
};

export default AddCommentForm;