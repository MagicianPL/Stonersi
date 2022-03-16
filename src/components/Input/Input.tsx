import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin-bottom: 30px;

    label, input {
        font-size: 18px;
    }

    label {
        margin-bottom: 15px;
        font-weight: bold;
        margin-right: auto;
    }

    input {
        padding: 5px 8px;
        width: 100%;
        color: #346137;
        font-weight: bold;
    }
`;

interface IProps {
    id: string
    label: string
    type?: string
}

const Input: React.FC<IProps> = ({id, label, type}) => {
    return(
        <Wrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={!type ? 'text' : type} />
        </Wrapper>
    );
};

export default Input;