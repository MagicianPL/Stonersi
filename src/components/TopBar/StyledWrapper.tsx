import styled from 'styled-components';

const StyledWrapper = styled.div<{transparent: boolean}>`
    width: 100%;
    height: 45px;
    padding: 10px 20px;
    background: ${(props: any) => props.transparent ? `transparent` : `rgba(152,186,79,0.3)`};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    position: fixed;
    z-index: 2;
    transition: background 1s;

    ul {
        display: flex;
        list-style: none;
        color: #346137;

        li {
            margin: 0 15px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                color: #4aa150;
            }
        }
    }
`;

export default StyledWrapper;