import styled from 'styled-components';
import CannabisImage from '../../images/cannabis.png';

const StyledHeader = styled.header<{user: any}>`
    width: 100%;
    height: ${({user}) => user?.function === "admin" || user?.function === "mod" ? '285px;' : '270px;'}
    padding: 15px 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
        height: ${({user}) => user?.function === "admin" || user?.function === "mod" ? '240px;' : '226px;'}
    }

    @media (min-width: 501px) and (max-width: 1070px) {
        height: ${({user}) => user?.function === "admin" || user?.function === "mod" ? '303px;' : '270px;'}
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${CannabisImage});
        background-size: cover;
        opacity: 0.25;
        z-index: -1;
    }

    h1 {
        font-family: SmokingTequila;
        color: #346137;
        font-size: 112px;
        position: relative;
        top: 20px;
        cursor: pointer;

        @media (max-width: 1070px) {
            top: 50px;
        }

        @media (max-width: 500px) {
            font-size: 72px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default StyledHeader;