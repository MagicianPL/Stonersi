import React from 'react';
import styled from 'styled-components';
import StyledButton from '../StyledButton/StyledButton';
import Marijuana from '../../images/marijuana.png';
import { Oval } from  'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../state/actions/modalActions';

const StyledModalWrapper = styled.div<{error?: string}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;

    & > div {
        position: relative;
        top: 40px;
        margin: 0 auto;
        width: 70%;
        max-width: 1000px;
        min-height: 320px;
        padding: 20px;
        background: white;
        border-radius: 5px;
        border-top: 30px solid ${({error}) => error ? 'red' : 'green'};
        border-bottom: 30px solid ${({error}) => error ? 'red' : 'green'};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        * {
            z-index: 2;
        }

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40%;
            height: 80%;
            background-image: url(${Marijuana});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            z-index: 1;
            opacity: 0.08;
        }

        p {
            margin-bottom: 50px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            color: ${({error}) => error ? 'red' : 'black'};
        }
    }

    &.hide {
        display: none;
    }
`;

interface IProps {
    content: string
    showModal: boolean
    error?: string
}

const Modal: React.FC<IProps> = ({content, showModal, error}) => {
    
    const dispatch = useDispatch();
    const hidingModal = () => {
        dispatch(hideModal());
    }

    return(
        <StyledModalWrapper className={showModal ? undefined : 'hide'} error={error}>
            <div>
                {content || error ?
                <>
                <p>{content ? content : error}</p>
                <StyledButton center onClick={hidingModal}>OK</StyledButton>
                </>
                :
                <Oval color="green" />
                }
            </div>
        </StyledModalWrapper>
    );
};

export default Modal;