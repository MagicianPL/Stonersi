import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    background: #3CB043;
    border-radius: 3px;
    margin-top: 30px;

    ul {
        padding: 40px 25px;
        list-style: none;
        background: #59e361;
        height: 100%;
        font-weight: bold;

        li {
            margin-bottom: 20px;
            font-size: 20px;
            cursor: pointer;
        }
    }

    .content {
        flex: 1;
    }

    .greeting {
        text-align: right;
        background: #59e361;
        padding: 10px 22px;
        font-weight: bold;
        font-style: italic;
        font-size: 18px;
    }
`;

export default StyledWrapper;