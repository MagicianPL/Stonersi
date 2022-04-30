import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 80%;
    border-radius: 5px;
    padding: 20px 10px;
    min-height: 50px;
    background: #FFCCFF;
    margin: 0 auto 30px auto;

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
    }
`;

export default StyledWrapper;