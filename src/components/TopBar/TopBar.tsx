import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    height: 45px;
    padding: 10px 20px;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    position: fixed;
    z-index: 2;

    ul {
        display: flex;
        list-style: none;
        color: #346137;

        li {
            margin: 0 15px;
            cursor: pointer;
        }
    }
`;

const TopBar = () => {
    return(
        <StyledWrapper>
            <ul>
                <li>Zaloguj</li>
                <li>Rejestracja</li>
            </ul>
        </StyledWrapper>
    )
};

export default TopBar;