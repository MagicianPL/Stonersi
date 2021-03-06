import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;

    ul {
        width: 100%;
        display: flex;
        font-size: 16px;
        justify-content: center;
        background: transparent;
        gap: 25px;
        padding: 20px 0;
       
        @media (max-width: 520px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding-left: 8px;
        }
    }

    h1 {
        text-align: center;
        font-size: 18px;
        margin-bottom: 20px;

        @media (max-width: 430px) {
            font-size: 16px;
        }

        @media (max-width: 380px) {
            font-size: 14px;
        }
    }

    .refresh {
        font-size: 14px;
        cursor: pointer;
        color: blue;
        text-align: center;
        transition: all 0.3s;
        width: max-content;
        margin: 0 auto 25px auto;

        &:hover {
            font-weight: bold;
        }
    }
`;

export default StyledWrapper;