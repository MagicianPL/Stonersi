import React, {useState, useEffect} from 'react';
import StyledContainer from './StyledContainer';
import Post from '../Post/Post';



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
                allPosts.length && allPosts.map((post: any) => <Post key={post.id} joints={post.joints} post={post.post} comments={post.comments} author={post.author} />)
            }
        </StyledContainer>
    );
};

export default PostsContainer;