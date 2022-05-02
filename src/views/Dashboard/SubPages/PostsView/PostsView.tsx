import React, { useState } from 'react';
import StyledWrapper from './StyledWrapper';
import Post from '../../../../components/Dashboard/PostsView/Post/Post';
import RejectedPost from '../../../../components/Dashboard/PostsView/RejectedPost/RejectedPost';
import refreshPage from '../../../../helpers/refreshPage';

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
                <p className="refresh" onClick={() => refreshPage()}>ODŚWIERZ</p>
                {pendingPosts.map((post: any) =>
                <Post key={post._id} id={post._id} content={post.content} createdAt={post.createdAt} createdBy={post.createdBy} />
                )}
                </>
            }
            {displayComponent === "rejected" &&
                <>
                <h1> - Niezaakceptowane ({rejectedPosts.length}) - </h1>
                <p className="refresh" onClick={() => refreshPage()}>ODŚWIERZ</p>
                {rejectedPosts.map((post: any) =>
                <RejectedPost key={post._id} id={post._id} content={post.content} createdAt={post.createdAt} createdBy={post.createdBy} />
                )}
                </>
            }
        </StyledWrapper>
    );
};

export default PostsView;