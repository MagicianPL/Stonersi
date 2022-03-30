import React from 'react';
import StyledPost from './StyledPost';
import { FaJoint } from 'react-icons/fa';
import wordColorPost from '../../helpers/wordColorPost';

interface IProps {
    joints: number
    post: string
    comments: []
    author: any
}

const Post: React.FC<IProps> = ({joints, post, comments, author}) => {
    return(
        <StyledPost>
            <div className="top">
                <p>Przypal Jointa</p>
                <p className="joints"><span><FaJoint /></span><span>{joints}</span></p>
            </div>
            <p>{wordColorPost(post).map((wordObj) => wordObj.isColored === true ? <span style={{color: "#224024"}}>{wordObj.value}</span> : wordObj.value)}</p>
            <div>
                <p className="comments">Komentarze({comments.length})</p>
                <p>~ {author ? author.login : "Anonim"}</p>
            </div>
        </StyledPost>
    );
};

export default Post;