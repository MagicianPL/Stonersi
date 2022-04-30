import React, { useState } from 'react';
import StyledWrapper from './StyledWrapper';
import Post from '../../../../components/Dashboard/PostsView/Post/Post';

interface IProps {
    posts: any
}

const PostsView: React.FC<IProps> = ({ posts }) => {
    const pendingPosts = posts.filter((post: any) => post.isAccepted === false && post.isRejected !== true);
    const rejectedPosts = posts.filter((post: any) => post.isRejected === true);

    //For displaying pending posts or rejected posts
    // "pending" or "rejected" values
    const [displayComponent, setDisplayComponent] = useState("pending");

    const renderView = (name: string) => {
        setDisplayComponent(name);
    };

    return(
        <StyledWrapper>
            <nav>
                <ul>
                    <li onClick={() => renderView("pending")}>Oczekujące</li>
                    <li onClick={() => renderView("rejected")}>Niezaakceptowane</li>
                </ul>
            </nav>
            {displayComponent === "pending" &&
                <>
                <h1> - Oczekujące na akceptację ({pendingPosts.length}) - </h1>
                {pendingPosts.map((post: any) =>
                <Post content={post.content} createdAt={post.createdAt} createdBy={post.createdBy} />
                )}
                </>
            }
            {displayComponent === "rejected" &&
                <>
                <h1> - Niezaakceptowane ({rejectedPosts.length}) - </h1>
                {rejectedPosts.map((post: any) =>
                <Post content={post.content} createdAt={post.createdAt} createdBy={post.createdBy} />
                )}
                </>
            }
        </StyledWrapper>
    );
};

export default PostsView;