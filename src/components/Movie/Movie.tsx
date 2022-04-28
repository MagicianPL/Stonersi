//Component Movie is for Videos View
import React from 'react';
import StyledWrapper from './StyledWrapper';
import YouTube from 'react-youtube';

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