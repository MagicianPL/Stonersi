import React, {useState, useEffect} from 'react';
import StyledContainer from './StyledContainer';
import Post from '../../components/Post/Post';
import { Rings } from 'react-loader-spinner';



const TopPostsContainer = () => {

    const [topPosts, setTopPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/posts/top/5`)
        .then(res => res.json())
        .then(data => setTopPosts(data));
    }, []);

    return(
        <StyledContainer>
            {
                topPosts.length < 1 && <div className="loader"><Rings ariaLabel="loading-indicator" /></div>
            }
            {
                topPosts.length > 0 && topPosts.map((post: any) => <Post key={post._id} joints={post.receivedJoints} post={post.content} comments={post.comments} author={post.createdBy} id={post._id} />)
            }
        </StyledContainer>
    );
};

export default TopPostsContainer;