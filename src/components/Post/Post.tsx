import React, { useState } from 'react';
import StyledPost from './StyledPost';
import { FaJoint } from 'react-icons/fa';
import wordColorPost from '../../helpers/wordColorPost';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import updateJoints from '../../helpers/updateJoints';

interface IProps {
    joints: number
    post: string
    comments: []
    author: any
    id: string
}

const Post: React.FC<IProps> = ({joints, post, comments, author, id}) => {

    const loggedUser = useSelector((state: any) => state.userReducer.user);
    const [jointsScore, setJointsScore] = useState(joints);
    
    /*Props for modal - not from a redux state because of not showing ALL MODALS from EVERY POST*/
    const [ modalIsShown, setModalIsShown ]= useState(false);
    const [ error, setError ] = useState("");
    const [ message, setMessage ] = useState("");

    /**************************************************************************************** */
    //For giving score (joint) for post
    //When user is not logged in it shows errorMessage on modal, after 3s it dissapear
    const dispatch = useDispatch();
    const giveJoint = () => {
        updateJoints(loggedUser, setModalIsShown, id, setMessage, setError, dispatch, jointsScore, setJointsScore)
    };
    /**********END OF GIVING SCORE FUNCIONALITY *********************************************** */

    return(
        <>
        <StyledPost>
            <div className="top">
                <p onClick={giveJoint}>Przypal Jointa</p>
                <p className="joints"><span><FaJoint /></span><span>{jointsScore}</span></p>
            </div>
            <p>{wordColorPost(post).map((wordObj, index) => wordObj.isColored === true ? <span key={index} style={{color: "#224024"}}>{wordObj.value}</span> : wordObj.value)}</p>
            <div>
                <p className="comments">Komentarze({comments.length})</p>
                <p>~ {author ? author.login : "Anonim"}</p>
            </div>
        </StyledPost>
        <Modal showModal={modalIsShown} content={message} error={error} modalFromPost={true}/>
        </>
    );
};

export default Post;