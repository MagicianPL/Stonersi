import React from 'react';
import StyledContainer from './StyledContainer';
import Movie from '../../components/Movie/Movie';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../state/actions/moviesActions';


const Videos = () => {
    const { isLoading, movies, error } = useSelector((state: any) => state.moviesReducer);

    //Get all movies once
    const dispatch = useDispatch();
    dispatch(getMovies());
   
    return(
        <StyledContainer>
            {isLoading && <Rings />}
            {movies && 
            <>
                <h1>FILMY</h1>
                <h2>Zchilloutuj się!</h2>
                {movies.map((movie: any) => <Movie key={movie.videoId} videoId={movie.videoId} title={movie.title} description={movie.description} />)}
            </>
            }
            {error && <p className="error">{error}</p>}
        </StyledContainer>
    );
};

export default Videos;