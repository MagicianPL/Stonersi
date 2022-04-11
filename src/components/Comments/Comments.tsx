import React from 'react';
import StyledWrapper from './StyledWrapper';

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
                <div className="comment" key={comment._id}>
                <p>{comment.content}</p>
                <p>~ {comment.author.login}</p>
                <hr />
                </div>)}
            </div>
        </StyledWrapper>
    );
};

export default Comments;