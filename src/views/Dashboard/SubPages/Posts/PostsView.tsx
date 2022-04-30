import React from 'react';
import StyledWrapper from './StyledWrapper';

const PostsView = () => {
    return(
        <StyledWrapper>
            <nav>
                <ul>
                    <li>Oczekujące</li>
                    <li>Niezaakceptowane</li>
                </ul>
            </nav>
        </StyledWrapper>
    );
};

export default PostsView;