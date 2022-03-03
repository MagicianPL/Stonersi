import React from 'react';
import styled from 'styled-components';
import CannabisImage from '../../images/cannabis.png';

const StyledHeader = styled.header`
    width: 100%;
    height: 240px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${CannabisImage});
        opacity: 0.25;
    }
`;

const Header = () => {
    return(
        <StyledHeader>

        </StyledHeader>
    );
};

export default Header;