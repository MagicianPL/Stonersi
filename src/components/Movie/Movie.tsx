//Component Movie is for Videos View
import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 520px 1fr;
    grid-template-rows: 60px auto;
    column-gap: 30px;

    .movieContainer {
        position: relative;
        max-width: 520px;
        height: 0;
        padding-bottom: 26.25%;
        grid-column: 1/3;
        grid-row: 1/3;

        .movie {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    h3 {
        grid-column: 2/3;
        grid-row: 1/2;
        padding-top: 8px;
        font-size: 20px;
    }

    p {
        grid-column: 2/3;
        grid-row: 2/3;
    }
`;

const Movie = () => {
    return(
        <StyledWrapper>
            <div className="movieContainer">
                <YouTube className="movie" videoId='https://www.youtube.com/watch?v=RRl_C73vFtQ&list=RDRRl_C73vFtQ&start_radio=1' />
            </div>
            <h3>Title of movie</h3>
            <p>YouTube – serwis internetowy założony w lutym 2005 roku, który umożliwia bezpłatne umieszczanie, nadawanie na żywo, ocenianie i komentowanie filmów. Prezesem od 2014 roku jest Susan Wojcicki.</p>
        </StyledWrapper>
    );
};

export default Movie;