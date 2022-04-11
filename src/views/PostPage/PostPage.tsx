import React, { useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';
import { FaJoint } from 'react-icons/fa';
import { useParams } from 'react-router';
import wordColorPost from '../../helpers/wordColorPost';
import { BallTriangle } from 'react-loader-spinner';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, setModalError } from '../../state/actions/modalActions';
import Comments from '../../components/Comments/Comments';

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

    useEffect(()=> console.log(post))

    return(
        <>
        <StyledWrapper>
            {!post && <div className="loader"><BallTriangle /></div>}
           {post &&
           <>
           <p className="score">
                <FaJoint />
               {post.receivedJoints}
            </p>
           <p>{wordColorPost(post.content).map((word, index) => word.isColored ? <span key={index} style={{color: "#224024"}}>{word.value}</span> : word.value)}</p>
           <p className="author">~ {post.createdBy ? post.createdBy.login : "Anonim"}</p>
           <Comments comments={post.comments} />
           </>
           }
        </StyledWrapper>
        <Modal showModal={modalIsVisible} error={error} />
        </>
    );
};

export default PostPage;