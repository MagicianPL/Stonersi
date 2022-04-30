import React from 'react';
import StyledWrapper from './StyledWrapper';
import Post from '../../../../components/Dashboard/PostsView/Post/Post';

interface IProps {
    posts: any
}

const PostsView: React.FC<IProps> = ({ posts }) => {
    const pendingPosts = posts.filter((post: any) => post.isAccepted === false && post.isRejected !== true)
    return(
        <StyledWrapper>
            <nav>
                <ul>
                    <li>Oczekujące</li>
                    <li>Niezaakceptowane</li>
                </ul>
            </nav>
            
            <h1> - Oczekujące na akceptację ({pendingPosts.length}) - </h1>
            {pendingPosts.map((post: any) =>
            <Post content={post.content} createdAt={post.createdAt} createdBy={post.createdBy} />
            )
            }
        </StyledWrapper>
    );
};

export default PostsView;