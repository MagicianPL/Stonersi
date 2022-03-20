import React from 'react';
import styled from 'styled-components';

const StyledModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;

    & > div {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        min-height: 320px;
        padding: 20px;
        background: white;
        border-radius: 5px;
    }
`;

const Modal = () => {
    return(
        <StyledModalWrapper>
            <div>

            </div>
        </StyledModalWrapper>
    );
};

export default Modal;