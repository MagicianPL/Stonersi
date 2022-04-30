import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    border: 1px solid gray;

    ul {
        width: 100%;
        display: flex;
        font-size: 16px;
        justify-content: center;
        background: transparent;
        gap: 25px;
        padding: 20px 0;
    }

    h1 {
        text-align: center;
        font-size: 18px;
        margin-bottom: 20px;
    }
`;

export default StyledWrapper;