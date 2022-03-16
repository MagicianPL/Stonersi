import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;

    & > div {
        display: flex;
        justify-content: space-around;
    }

    .top {
        display: flex;
        justify-content: flex-end;
    }

    .joints {
        margin-left: 20px;
        background: yellow;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            font-size: 14px;
        }

        span:nth-child(2) {
            font-weight: bold;
            font-size: 18px;
        }
    }
`;

const Post = () => {
    return(
        <StyledPost>
            <div className="top">
                <p>Przypal Jointa</p>
                <p className="joints"><span></span><span>5</span></p>
            </div>
            <p>Kiedy ostatnio paliłem/am papierosa... To wydawało mi się, że we wszystkich piosenkach jest kontekst papierosów :D</p>
            <div>
                <p>Komentarze</p>
                <p>~ Autor</p>
            </div>
        </StyledPost>
    );
};

export default Post;