import styled from 'styled-components';

const StyledWrapper = styled.div<{transparent: boolean}>`
    width: 100%;
    padding: 10px 20px;
    background: ${(props: any) => props.transparent ? `transparent` : `rgba(152,186,79,0.3)`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 18px;
    font-weight: bold;
    position: fixed;
    z-index: 2;
    transition: background 1s;
    color: #346137;

    ul {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;

        li {
            margin: 0 15px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                color: #4aa150;
            }
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    & > p {
        width: 100%;
        max-width: 1200px;
        margin: 8px auto 0 auto;
        text-align: right;
        padding-right: 15px;
        text-shadow: -2px 0px 2px rgba(52,97,55,0.60);
    }
`;

export default StyledWrapper;