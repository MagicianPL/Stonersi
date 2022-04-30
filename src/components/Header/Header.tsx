import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';
import MainNav from '../MainNav/MainNav';
import { useSelector } from 'react-redux';

const Header = () => {
    const { user } = useSelector((state: any) => state.userReducer);
    return(
        <StyledHeader user={user}>
            <Link to="/"><h1>STONERSI</h1></Link>
            <MainNav />
        </StyledHeader>
    );
};

export default Header;