import React, {useState, useEffect} from 'react';
import StyledContainer from './StyledContainer';
import Post from '../../components/Post/Post';
import { Rings } from 'react-loader-spinner';



const PostsContainer = () => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setAllPosts(data.Posts));
    }, []);

    return(
        <StyledContainer>
            {
                allPosts.length < 1 && <div className="loader"><Rings ariaLabel="loading-indicator" /></div>
            }
            {
                allPosts.length > 0 && allPosts.map((post: any) => <Post key={post.id} joints={post.joints} post={post.post} comments={post.comments} author={post.author} />)
            }
        </StyledContainer>
    );
};

export default PostsContainer;