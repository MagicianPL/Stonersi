import React from 'react';
import StyledHeader from './StyledHeader';
import MainNav from '../MainNav/MainNav';

const Header = () => {
    return(
        <StyledHeader>
            <h1>STONERSI</h1>
            <MainNav />
        </StyledHeader>
    );
};

export default Header;