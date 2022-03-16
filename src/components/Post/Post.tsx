import React from 'react';
import StyledPost from './StyledPost';
import { FaJoint } from 'react-icons/fa';

interface IProps {
    joints: number
    post: string
    comments: []
    author: string
}

const Post: React.FC<IProps> = ({joints, post, comments, author}) => {
    return(
        <StyledPost>
            <div className="top">
                <p>Przypal Jointa</p>
                <p className="joints"><span><FaJoint /></span><span>{joints}</span></p>
            </div>
            <p>{post}</p>
            <div>
                <p className="comments">Komentarze({comments.length})</p>
                <p>~ {author}</p>
            </div>
        </StyledPost>
    );
};

export default Post;