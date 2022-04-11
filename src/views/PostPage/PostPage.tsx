import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import StyledPost from '../../components/Post/StyledPost';
import wordColorPost from '../../helpers/wordColorPost';

const StyledWrapper = styled(StyledPost)`
    & > p {
        margin-left: 0;
    }
`;

const PostPage = () => {

    const { id: postId} = useParams();

    const [fetchingError, setFetchingError] = useState("");
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        const fetchPost = async () => {
           const res = await fetch(`${process.env.REACT_APP_API}/posts/${postId}`);
           const data = await res.json();

           if(!res.ok) {
            setFetchingError(data.message);
           } else {
               setPost(data[0]);
           };
        };

        fetchPost();
    }, [postId]);

    return(
        <StyledWrapper>
           {post && <p>{wordColorPost(post.content).map((word, index) => word.isColored ? <span key={index} style={{color: "#224024"}}>{word.value}</span> : word.value)}</p>}
        </StyledWrapper>
    );
};

export default PostPage;