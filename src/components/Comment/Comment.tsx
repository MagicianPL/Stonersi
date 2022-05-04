import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

interface IProps {
    _id: string
    content: string
    author: any
}

const Comment: React.FC<IProps> = ({_id, content, author }) => {
    const { user: loggedInUser} = useSelector((state: any) => state.userReducer);

    //Funcionality only for Admin
    //Modal Stuff
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalError, setModalError] = useState("");

    const deleteComment = async () => {
        setShowModal(true);
        const res = await fetch(`${process.env.REACT_APP_API}/comments/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${loggedInUser.token}`
            }
        });

        const data = await res.json();
        if(!res.ok) {
            setModalError(data.message);
            setTimeout(() => {
                setShowModal(false);
            }, 2000);
            return;
        }

        setModalContent(data.message);
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    };

    return(
        <>
        <div className="comment" key={_id}>
            {loggedInUser?.function === "admin" &&
            <span title="usuń" onClick={deleteComment}>X</span>
            }
            <p>{content}</p>
            <p>~ {author.login}</p>
            <hr />
        </div>
        {loggedInUser?.function === "admin" &&
        <Modal showModal={showModal} content={modalContent} error={modalError} modalFromPost />
        }
        </>
    );
};

export default Comment;