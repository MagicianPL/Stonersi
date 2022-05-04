import styled from 'styled-components';

const StyledWrapper = styled.div`
    && {
        width: 100%;
        display: block;
    }
    
    h1 {
        text-align: left;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .comment {
        padding-left: 20px;
        margin-bottom: 45px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        span {
            color: red;
            font-weight: bold;
            font-size: 12px;
            cursor: pointer;
            max-width: fit-content;
        }
    }
`;

export default StyledWrapper;