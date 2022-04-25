import React from 'react';
import StyledContainer from './StyledContainer';
import Movie from '../../components/Movie/Movie';
import { Rings } from 'react-loader-spinner';
import movies from './movies';



const Videos = () => {

    return(
        <StyledContainer>
            <h1>FILMY</h1>
            <h2>Zchilloutuj się!</h2>
            <Movie />
        </StyledContainer>
    );
};

export default Videos;