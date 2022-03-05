import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{transparent: boolean}>`
    width: 100%;
    height: 45px;
    padding: 10px 20px;
    background: ${(props: any) => props.transparent ? `transparent` : `rgba(152,186,79,0.3)`};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    position: fixed;
    z-index: 2;
    transition: background 1s;

    ul {
        display: flex;
        list-style: none;
        color: #346137;

        li {
            margin: 0 15px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                color: #4aa150;
            }
        }
    }
`;

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