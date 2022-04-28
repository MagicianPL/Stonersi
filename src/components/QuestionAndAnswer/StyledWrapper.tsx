import styled from 'styled-components';

const StyledWrapper = styled.div<{showAnswer: boolean}>`
    .question {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        cursor: pointer;

        @media (max-width: 580px) {
            flex-direction: column;
            gap: 8px;
        }
    }

    .answer {
        margin: 20px 0 60px auto;
        color: #346137;
        max-height: ${({showAnswer}) => showAnswer ? '80px' : '0'};
        overflow: hidden;
        transition: all 0.7s;

        @media (max-width: 900px) {
            max-height: ${({showAnswer}) => showAnswer ? '207px' : '0'};
        }
    }

    svg {
        ${({showAnswer}) => showAnswer && 'transform: rotate(180deg);'}
        transition: all 0.5s;
    }
`;

export default StyledWrapper;