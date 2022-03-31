import React, { useState } from 'react';
import StyledPost from './StyledPost';
import { FaJoint } from 'react-icons/fa';
import wordColorPost from '../../helpers/wordColorPost';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { getJoints } from '../../state/actions/jointsActions';

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

    //For giving score (joint) for post
    //When user is not logged in it shows errorMessage on modal, after 3s it dissapear
    const dispatch = useDispatch();
    const giveJoint = async () => {
        if(loggedUser) {
            setModalIsShown(true);
            const res = await fetch(`${process.env.REACT_APP_API}/posts/lightjoint`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${loggedUser.token}`
                  },
                body: JSON.stringify({
                    postId: id
                })
            });
            const data = await res.json();
            if (res.ok) {
                setMessage("Właśnie przypaliłeś jointa!");
                setTimeout(() => {
                    setModalIsShown(false);
                    setMessage("");
                    setError("");
                }, 3000);
                dispatch(getJoints(loggedUser._id))
                setJointsScore(jointsScore + 1);
            } else {
                setError(data.message);
                setTimeout(() => {
                    setModalIsShown(false);
                    setMessage("");
                    setError("");
                }, 3000);
            }
        } else {
            setModalIsShown(true);
            setError("Tylko zalogowani użytkownicy mogą przypalać jointy. Zaloguj się i przypal ;)");
            setTimeout(() => {setModalIsShown(false)}, 3000)
        }
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