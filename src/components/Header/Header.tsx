import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';
import MainNav from '../MainNav/MainNav';

const Header = () => {
    return(
        <StyledHeader>
            <Link to="/"><h1>STONERSI</h1></Link>
            <MainNav />
        </StyledHeader>
    );
};

export default Header;