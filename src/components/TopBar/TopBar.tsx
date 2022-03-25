import React, { useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopBar = () => {

    //for setting bg on scrolling
    const [transparentTopBarBg, setTransparentTopBarBg] = useState(true);

    //handling topBar backround on scroll
    const handleTopBarBackground = () => {
        if (document.body.getBoundingClientRect().top < -45) {
            setTransparentTopBarBg(false);
        };

        if (!transparentTopBarBg) {
            if (document.body.getBoundingClientRect().top > -45) {
                setTransparentTopBarBg(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleTopBarBackground);

        return () => {
            window.removeEventListener('scroll', handleTopBarBackground);
        }
    });

    //If user is logged user is not falsy
    const { user } = useSelector((state: any) => state.userReducer);

    return(
        <StyledWrapper transparent={transparentTopBarBg}>
            <ul>
                {user ?
                <>
                <li>Witaj {user.login}</li>
                <li>Wyloguj</li>
                </> :
                <>
                <Link to="/login"><li>Zaloguj</li></Link>
                <Link to="/register"><li>Rejestracja</li></Link>
                </>}
            </ul>
            {user ?
                user.joints === 0 ?
                <p>Pozostało Ci 0 jointów do przypalenia</p>
                :
                <p>Pozostały Ci 3 jointy do przypalenia</p>
                : null}
        </StyledWrapper>
    )
};

export default TopBar;