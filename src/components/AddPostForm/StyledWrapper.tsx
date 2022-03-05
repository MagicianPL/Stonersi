import styled from 'styled-components';

const StyledWrapper = styled.div<{show: boolean}>`
    width: 100%;
    height: ${({show}) => show? '20vh' : '0px'};
    transition: height 0.4s;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(152,186,79, 0.7);
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        z-index: -1;
    }

    form {
        height: 100%;
        overflow-y: hidden;
        padding: 25px 0;

        input {
            width: 20px;
            height: 20px;
        }
    }
`;

export default StyledWrapper;