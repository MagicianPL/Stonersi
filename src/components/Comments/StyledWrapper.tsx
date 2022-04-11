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
    }
`;

export default StyledWrapper;