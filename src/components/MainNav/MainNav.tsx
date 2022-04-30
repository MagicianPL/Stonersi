import React from 'react';
import StyledWrapper from './StyledWrapper';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainNav = () => {
    const { user } = useSelector((state: any) => state.userReducer);
    return (
            <StyledWrapper>
                <Link to="/"><li>Główna</li></Link>
                <Link to="/top"><li>Top 5</li></Link>
                <Link to="/videos"><li>Filmy</li></Link>
                <Link to="/faq"><li>FAQ</li></Link>
                {
                    (user?.function === "admin" || user?.function === "mod") &&
                    <>
                    <li className="break"></li>
                    <Link to="/dashboard"><li className="dashboard">- Panel -</li></Link>
                    </>
                }
            </StyledWrapper>
    );
};

export default MainNav;