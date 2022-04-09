import styled from 'styled-components';

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
    padding: 5px 10px 15px 10px;
    background: rgba(152,186,79, 0.1);
    margin-bottom: 35px;

    & > div {
        display: flex;
        justify-content: space-around;
    }

    .top {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        p:nth-child(1) {
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;

            &:hover {
                text-shadow: 0px 3px 2px rgba(0,0,0,0.67);
            }
        }
    }

    .joints {
        margin-left: 36px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-right: 5px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(74, 161, 80, 0.4);
            z-index: -1;
            
        }

        span {
            font-size: 14px;
        }

        span:nth-child(2) {
            font-weight: bold;
            font-size: 18px;
        }
    }

    & > p {
        text-align: center;
        font-size: 20px;
        max-width: 80%;
        margin: 20px auto 30px auto;

        @media (max-width: 500px) {
            font-size: 16px;
            line-height: 20px;
        }

        @media (max-width: 700px) {
            max-width: 100%;
        }
    }

    .comments {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default StyledPost;