import React from 'react';
import styled from 'styled-components';
import CannabisImage from '../../images/cannabis.png';

const StyledHeader = styled.header`
    width: 100%;
    height: 240px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${CannabisImage});
        opacity: 0.25;
    }

    h1 {
        font-family: SmokingTequila;
        color: #346137;
        font-size: 112px;
    }
`;

const Header = () => {
    return(
        <StyledHeader>
            <h1>STONERSI</h1>
        </StyledHeader>
    );
};

export default Header;