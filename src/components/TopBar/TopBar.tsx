import React, { useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';

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
    })

    return(
        <StyledWrapper transparent={transparentTopBarBg}>
            <ul>
                <li>Zaloguj</li>
                <li>Rejestracja</li>
            </ul>
        </StyledWrapper>
    )
};

export default TopBar;