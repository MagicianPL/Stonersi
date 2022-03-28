import styled from 'styled-components';

const StyledWrapper = styled.div<{show: boolean}>`
    width: 100%;
    height: ${({show}) => show? '370px' : '0px'};
    transition: height 0.4s;
    position: relative;
    margin-bottom: 25px;

    @media (max-width: 390px) {
        height: ${({show}) => show? '430px' : '0px'};
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(152,186,79, 0.7);
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        z-index: -1;
    }

    form {
        height: 100%;
        overflow-y: hidden;

        & > div {
            padding: 25px 0;
            display: flex;
            flex-direction: column;
        }

        input, label {
            cursor: pointer;
        }

        input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            accent-color: green;
        }

        .signature {
            width: 100%;
            max-width: 150px;
            height: auto;
            font-size: 18px;
            padding: 5px 10px;
            cursor: text;
            margin: 0 auto;
        }

        .input {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            font-size: 20px;

            span {
                color: #224024;
            }
        }

        textarea {
            width: 90%;
            height: 100px;
            display: block;
            margin: 0 auto;
            font-size: 18px;
            padding: 10px;
            margin-bottom: 20px;
        }
    }
`;

export default StyledWrapper;