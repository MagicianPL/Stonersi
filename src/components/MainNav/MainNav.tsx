import React from 'react';
import styled from 'styled-components';
import Marijuana from '../../images/marijuana.png';

const MainNav = () => {

    const StyledWrapper = styled.ul`
        list-style: none;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        margin-top: auto;
        font-size: 22px;
        text-transform: uppercase;
        color: #224024;
        font-weight: bold;

        li {
            cursor: pointer;
            position: relative;
            transition: all 0.3s;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: -35px;
                right: 0;
                background-image: url(${Marijuana});
                background-size: contain;
                background-position: left;
                background-repeat: no-repeat;
                z-index: -1;
                opacity: 0;
                transition: opacity 0.5s;
            }

            &:hover {
                color: #346137;
            }

            &:hover::before {
                opacity: 0.6;
            }
        }
    `;

    return (
            <StyledWrapper>
                <li>Główna</li>
                <li>Top 5</li>
                <li>Filmy</li>
            </StyledWrapper>
    );
};

export default MainNav;