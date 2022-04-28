import styled from 'styled-components';

const StyledWrapper = styled.div<{showAnswer: boolean}>`
    .answer {
        margin: 20px 0 60px auto;
        color: #346137;
        max-height: ${({showAnswer}) => showAnswer ? '80px' : '0'};
        overflow: hidden;
        transition: all 0.7s;
}
`;

export default StyledWrapper;