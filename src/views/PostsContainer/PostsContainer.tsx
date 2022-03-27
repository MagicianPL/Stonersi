import React, {useState, useEffect} from 'react';
import StyledContainer from './StyledContainer';
import Post from '../../components/Post/Post';
import { Rings } from 'react-loader-spinner';



const PostsContainer = () => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/posts`)
        .then(res => res.json())
        .then(data => setAllPosts(data.posts));
    }, []);

    return(
        <StyledContainer>
            {
                allPosts.length < 1 && <div className="loader"><Rings ariaLabel="loading-indicator" /></div>
            }
            {
                allPosts.length > 0 && allPosts.map((post: any) => <Post key={post._id} joints={post.receivedJoints} post={post.content} comments={post.comments} author={post.createdBy} />)
            }
        </StyledContainer>
    );
};

export default PostsContainer;