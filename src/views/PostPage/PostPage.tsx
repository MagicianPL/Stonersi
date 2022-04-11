import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import StyledPost from '../../components/Post/StyledPost';
import wordColorPost from '../../helpers/wordColorPost';
import { BallTriangle } from 'react-loader-spinner';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, setModalError } from '../../state/actions/modalActions';

const StyledWrapper = styled(StyledPost)`
    & > p {
        margin-left: 0;
    }

    .loader {
        width: 100%;
        display: flex;
        justify-content: center;

        svg {
            stroke: green;
        }
    }
`;

const PostPage = () => {

    const { id: postId} = useParams();

    const [post, setPost] = useState<any>(null);

    //Modal Stuff
    const { showModal: modalIsVisible, error } = useSelector((state: any) => state.modalReducer);
    const dispatch = useDispatch();

    //Fetching post from DB
    useEffect(() => {
        const fetchPost = async () => {
           const res = await fetch(`${process.env.REACT_APP_API}/posts/${postId}`);
           const data = await res.json();

           if(!res.ok) {
            dispatch(showModal());
            dispatch(setModalError(data.message));
           } else {
               setPost(data[0]);
           };
        };

        fetchPost();
    }, [postId, dispatch]);

    return(
        <>
        <StyledWrapper>
            {!post && <div className="loader"><BallTriangle /></div>}
           {post && <p>{wordColorPost(post.content).map((word, index) => word.isColored ? <span key={index} style={{color: "#224024"}}>{word.value}</span> : word.value)}</p>}
        </StyledWrapper>
        <Modal showModal={modalIsVisible} error={error} />
        </>
    );
};

export default PostPage;