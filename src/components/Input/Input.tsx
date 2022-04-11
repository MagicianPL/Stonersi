import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{full?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    ${({full}) => full ? "max-width: 100%" : "max-width: 400px;"}
    margin-bottom: 30px;

    label, input {
        font-size: 18px;
    }

    label {
        margin-bottom: 15px;
        font-weight: bold;
        margin-right: auto;
    }

    input, textarea {
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
    name?: string
    value?: string
    placeholder?: string
    onChange?: any
    full?: boolean
}

const Input: React.FC<IProps> = ({id, label, type, name, value, placeholder, onChange, full}) => {
    if(type === "textarea") {

    return(<Wrapper full>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        </Wrapper>)
    };

    return(
        <Wrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={!type ? 'text' : type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        </Wrapper>
    );
};

export default Input;