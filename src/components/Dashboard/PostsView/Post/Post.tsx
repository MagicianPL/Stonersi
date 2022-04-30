import React from 'react';
import StyledWrapper from './StyledWrapper';
import StyledPostButton from '../StyledPostButton';

interface IProps {
    content: string
    createdAt: string
    createdBy: any
}

const Post: React.FC<IProps> = ({ content, createdAt, createdBy }) => {
    return(
        <StyledWrapper>
            <p>Autor: {createdBy ? createdBy.login : "Anonim"}</p>
            <p>Wysłano: {createdAt}</p>
            <p className="content">{content}</p>
            <div className="postActions">
                <StyledPostButton>Akceptuj</StyledPostButton>
                <StyledPostButton color="red">Odrzuć</StyledPostButton>
            </div>
        </StyledWrapper>
    );
};

export default Post;