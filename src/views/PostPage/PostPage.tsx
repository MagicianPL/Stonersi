import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostPage = () => {

    const { id: postId} = useParams();

    const [fetchingError, setFetchingError] = useState("");
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
           const res = await fetch(`${process.env.REACT_APP_API}/posts/${postId}`);
           const data = await res.json();

           if(!res.ok) {
            setFetchingError(data.message);
           } else {
               setPost(data);
           };
        };

        fetchPost();
    }, [postId]);

    useEffect(() => {
        console.log(post)
    })
    return(
        <h1>Post Page</h1>
    );
};

export default PostPage;