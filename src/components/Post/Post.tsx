import React, { useState } from 'react';
import StyledPost from './StyledPost';
import { FaJoint } from 'react-icons/fa';
import wordColorPost from '../../helpers/wordColorPost';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

interface IProps {
    joints: number
    post: string
    comments: []
    author: any
}

const Post: React.FC<IProps> = ({joints, post, comments, author}) => {

    const loggedUser = useSelector((state: any) => state.userReducer.user);
    
    /*Props for modal - not from a redux state because of not showing ALL MODALS from EVERY POST*/
    const [ modalIsShown, setModalIsShown ]= useState(false);
    const [ error, setError ] = useState("");

    //For giving score (joint) for post
    //When user is not logged in it shows errorMessage on modal, after 3s it dissapear
    const giveJoint = () => {
        if(loggedUser) {
            console.log("success")
        } else {
            setModalIsShown(true);
            setError("Tylko zalogowani użytkownicy mogą przypalać jointy. Zaloguj się i przypal ;)");
            setTimeout(() => {setModalIsShown(false)}, 3000)
        }
    };

    return(
        <>
        <StyledPost>
            <div className="top">
                <p onClick={giveJoint}>Przypal Jointa</p>
                <p className="joints"><span><FaJoint /></span><span>{joints}</span></p>
            </div>
            <p>{wordColorPost(post).map((wordObj, index) => wordObj.isColored === true ? <span key={index} style={{color: "#224024"}}>{wordObj.value}</span> : wordObj.value)}</p>
            <div>
                <p className="comments">Komentarze({comments.length})</p>
                <p>~ {author ? author.login : "Anonim"}</p>
            </div>
        </StyledPost>
        <Modal showModal={modalIsShown} error={error} modalFromPost={true}/>
        </>
    );
};

export default Post;