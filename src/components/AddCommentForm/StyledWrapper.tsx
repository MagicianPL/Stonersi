import styled from 'styled-components';

const StyledWrapper = styled.div<{loading: Boolean, success: any, error: any}>`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

    form {
        background: white;
        border-radius: 8px;
        padding: 15px 10px;
        width: 100%;
        max-width: 800px;
        min-height: 100px;
        ${ (({loading, success, error}) => loading || success || error ? `
        display: flex;
        justify-content: center;
        ` : null)

        }

        h1 {
            text-align: center;
            margin-bottom: 25px;
            background: rgba(0, 0, 0, 0.1);
            padding: 5px 0;
            border-radius: 4px;
        }

        textarea {
            min-height: 100px;
            font-size: 18px;
        }

        .actions {
            width: 100%;
            display: flex;
            gap: 20px;
            justify-content: flex-start;
        }

        p {
            text-align: center;
            font-weight: bold;
            font-size: 24px;
        }
    }
`;

export default StyledWrapper;