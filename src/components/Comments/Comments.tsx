import React from 'react';
import StyledWrapper from './StyledWrapper';
import Comment from '../Comment/Comment';

/*This Components shows comments for specific post - it is used on PostPage Component*/

interface IProps {
    comments: []
}

const Comments: React.FC<IProps> = ({comments}) => {

    return(
        <StyledWrapper>
            <h1>{comments.length < 1 ? "Brak komentarzy" : "Komentarze:"}</h1>
            <div>
                {comments.map((comment: any) =>
                <Comment key={comment._id} _id={comment._id} content={comment.content} author={comment.author} />
                )}
            </div>
        </StyledWrapper>
    );
};

export default Comments;