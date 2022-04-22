import React from 'react';
import StyledWrapper from './StyledWrapper';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
            <StyledWrapper>
                <Link to="/"><li>Główna</li></Link>
                <Link to="/top"><li>Top 5</li></Link>
                <li>Filmy</li>
                <li>FAQ</li>
            </StyledWrapper>
    );
};

export default MainNav;