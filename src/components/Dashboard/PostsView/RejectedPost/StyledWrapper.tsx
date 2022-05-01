import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 80%;
    border-radius: 5px;
    padding: 20px 10px;
    min-height: 50px;
    background: #FFCCFF;
    margin: 0 auto 30px auto;
    border: 1px solid red;

    @media (max-width: 700px) {
        max-width: 98%;
    }

    p {
        margin-bottom: 25px;
    }

    .content {
        font-weight: bold;
        text-align: center;
    }

    .postActions {
        display: flex;
        gap: 30px;
        padding-left: 10px;

        @media (max-width: 390px) {
            flex-direction: column;
            gap: 10px;
        }
    }

    .accepted, .rejected {
        color: green;
        font-weight: bold;
    }

    .rejected {
        color: red;
    }
`;

export default StyledWrapper;