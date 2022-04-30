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
        border-radius: 3px;

        li {
            margin-bottom: 20px;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                opacity: 0.7;
            }
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
        border-radius: 3px;

        span {
            opacity: 0;
            animation: appearing 1s forwards;
            animation-delay: 1.5s;
        }
    }

    @keyframes appearing {
        100% {
            opacity: 1;
        }
    }
`;

export default StyledWrapper;