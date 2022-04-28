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
            <Movie videoId="https://www.youtube.com/watch?v=RRl_C73vFtQ&list=RDRRl_C73vFtQ&start_radio=1" title="Title of the movie" description="Just a simple description of the video" />
            <Movie videoId="https://www.youtube.com/watch?v=RRl_C73vFtQ&list=RDRRl_C73vFtQ&start_radio=1" title="Title of the movie" description="Just a simple description of the video" />
        </StyledContainer>
    );
};

export default Videos;