import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    background: #3CB043;
    border-radius: 3px;
    margin-top: 30px;
    opacity: 0;
    transform: translateY(-25px);
    animation: appearing 1.5s forwards;

    @media (max-width: 360px) {
        * {
            font-size: 12px;
        }
    }

    ul {
        padding: 40px 25px;
        list-style: none;
        background: #59e361;
        height: 100%;
        font-weight: bold;
        border-radius: 3px;

        @media (max-width: 500px) {
            padding: 40px 15px;
        }

        @media (max-width: 390px) {
            padding: 40px 3px 0 3px;
        }

        li {
            margin-bottom: 20px;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                opacity: 0.7;
            }

            @media (max-width: 500px) {
                font-size: 16px;
            }

            @media (max-width: 380px) {
                font-size: 14px;
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

        @media (max-width: 380px) {
            font-size: 14px;
        }

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

    @keyframes appearing {
        100% {
            transform: translateY(0);
            opacity: 1;
        }

    }
`;

export default StyledWrapper;