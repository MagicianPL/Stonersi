import React, {useEffect} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    && {
        width: 100%;
        display: block;
    }
    
    h1 {
        text-align: left;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .comment {
        margin-bottom: 15px;
    }
`;

interface IProps {
    comments: []
}

const Comments: React.FC<IProps> = ({comments}) => {
    useEffect(()=> console.log(comments))
    return(
        <StyledWrapper>
            <h1>{comments.length < 1 ? "Brak komentarzy" : "Komentarze:"}</h1>
            <div>
                {comments.map((comment: any) =>
                <div className="comment" key={comment._id}>
                <p>{comment.content}</p>
                </div>)}
            </div>
        </StyledWrapper>
    );
};

export default Comments;