import styled from 'styled-components';

const StyledWrapper = styled.div<{show: boolean}>`
    width: 100%;
    height: ${({show}) => show? '20vh' : '0px'};
    transition: height 0.4s;
    background: rgba(152,186,79,0.5);
`;

export default StyledWrapper;