//Component Movie is for Videos View
import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 520px 1fr;
    grid-template-rows: 60px auto;
    column-gap: 30px;
    margin-bottom: 60px;

    @media (max-width: 841px) {
        display: block;
    }

    .movieContainer {
        position: relative;
        max-width: 520px;
        height: 0;
        padding-bottom: 26.25%;
        grid-column: 1/3;
        grid-row: 1/3;

        @media (max-width: 841px) {
            padding-bottom: 60.25%;
            margin: 0 auto 8px auto;

        }

        @media (min-width: 568px) {
            padding-bottom: 293px;
        }

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

        @media (max-width: 690px) {
            margin-bottom: 8px;
        }
    }

    p {
        grid-column: 2/3;
        grid-row: 2/3;
    }
`;

interface IProps {
    videoId: string
    title: string
    description: string
}

const Movie: React.FC<IProps> = ({videoId, title, description}) => {
    return(
        <StyledWrapper>
            <div className="movieContainer">
                <YouTube className="movie" videoId={videoId} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </StyledWrapper>
    );
};

export default Movie;