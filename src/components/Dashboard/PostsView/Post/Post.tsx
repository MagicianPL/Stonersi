import React, { useState } from 'react';
import StyledWrapper from './StyledWrapper';
import StyledPostButton from '../StyledPostButton';
import Modal from '../../../Modal/Modal';
import { useSelector } from 'react-redux';

interface IProps {
    content: string
    createdAt: string
    createdBy: any
    id: string
}

const Post: React.FC<IProps> = ({ content, createdAt, createdBy, id }) => {
    //Modal stuff
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [error, setError] = useState(""); 

    const { user } = useSelector((state: any) => state.userReducer);

    //For displaying information on Post cmp itself - when user clicks accept or reject btn
    const [acceptedPost, setAcceptedPost] = useState(false);
    const [rejectedPost, setRejectedPost] = useState(false);

    const acceptPost = async () => {
        setShowModal(true);
        const res = await fetch(`${process.env.REACT_APP_API}/posts/${id}/accept`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
        });
        const data = await res.json();

        if (!res.ok) {
            setError(data.message + "Strona zostanie przeładowana");
            setTimeout(() => {
                window.location.assign(window.location.href);
            }, 2000);
        };

        setModalMessage("Post został zaakceptowany");
        setTimeout(() => {
            setShowModal(false);
            setAcceptedPost(true);
        }, 1500);
    };

    const rejectPost = async () => {
        setShowModal(true);
        const res = await fetch(`${process.env.REACT_APP_API}/posts/${id}/reject`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
        });
        const data = await res.json();

        if (!res.ok) {
            setError(data.message + "Strona zostanie przeładowana");
            setTimeout(() => {
                window.location.assign(window.location.href);
            }, 2000);
        };

        setModalMessage("Post został odrzucony");
        setTimeout(() => {
            setShowModal(false);
            setRejectedPost(true);
        }, 1500);
    };

    return(
        <>
        <StyledWrapper>
            <p>Autor: {createdBy ? createdBy.login : "Anonim"}</p>
            <p>Wysłano: {createdAt}</p>
            <p className="content">{content}</p>
            {!acceptedPost && !rejectedPost ?
            <div className="postActions">
            <StyledPostButton onClick={acceptPost}>Akceptuj</StyledPostButton>
            <StyledPostButton onClick={rejectPost} color="red">Odrzuć</StyledPostButton>
        </div> 
        :
        acceptedPost ?
        <p className="accepted">Zaakceptowano</p>
        :
        <p className="rejected">Odrzucono</p>
        }
        </StyledWrapper>
        <Modal modalFromPost showModal={showModal} content={modalMessage} error={error} />
        </>
    );
};

export default Post;