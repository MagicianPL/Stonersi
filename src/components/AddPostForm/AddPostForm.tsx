import React, { useState } from 'react';
import StyledWrapper from './StyledWrapper';
import StyledButton from '../StyledButton/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost } from '../../state/actions/postActions';
import Modal from '../Modal/Modal';

interface IProps {
    show: boolean
}

const AddPostForm: React.FC<IProps> = ({show}) => {
    const [firstSentence, setFirstSentence] = useState('joint');
    const [textAreaValue, setTextAreaValue] = useState(
        firstSentence === 'joint' ? 'Kiedy ostatnio paliłem/am papierosa... '
                        : firstSentence === 'edible' ? 'Kiedy ostatnio jadłem/am czekoladę... '
                        : ""
    );

    //User is true when he is logged
    const { user } = useSelector((state: any) => state.userReducer);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstSentence(e.target.value);
        setTextAreaValue(
            e.target.value === 'joint' ? 'Kiedy ostatnio paliłem/am papierosa... '
                        : e.target.value === 'edible' ? 'Kiedy ostatnio jadłem/am czekoladę... '
                        : ""
        );
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        //content for new post
        setTextAreaValue(e.target.value);
    }

    const dispatch = useDispatch();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const post: {
            content: string,
            createdBy?: string
        } = {
            content: textAreaValue
        };
        if (user) {
            post.createdBy = user._id;
        }

        dispatch(createNewPost(post, user));
        // If post was successed sent - clear that post on textarea
        // So if error for modal is falsy
        if (!error) return setTextAreaValue(
            firstSentence === 'joint' ? 'Kiedy ostatnio paliłem/am papierosa...'
                        : firstSentence === 'edible' ? 'Kiedy ostatnio jadłem/am czekoladę...'
                        : ""
        );
    };

    //Props for Modal
    const { showModal, error, message } = useSelector((state: any) => state.modalReducer);

    return(
        <>
        <StyledWrapper show={show}>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div className="input">
                    <input type="radio" id="joint" name="possibility" value="joint" checked={firstSentence === 'joint'} onChange={handleInputChange} />
                    <label htmlFor="joint">Kiedy ostatnio paliłem/am <span>papierosa</span>...</label>
                    </div>
                    <div className="input">
                    <input type="radio" id="edible" name="possibility" value="edible" checked={firstSentence === 'edible'} onChange={handleInputChange} />
                    <label htmlFor="edible">Kiedy ostatnio jadłem/am <span>czekoladę</span>...</label>
                    </div>
                    <div className="input">
                    <input type="radio" id="none" name="possibility" value="none" checked={firstSentence === 'none'} onChange={handleInputChange} />
                    <label htmlFor="none">Brak</label>
                    </div>
                    <textarea value={textAreaValue} onChange={handleTextAreaChange}></textarea>
                    <input className="signature" type="text" placeholder="Podpis" value={user ? user.login : "Anonim"} disabled />
                    <StyledButton center>WYŚLIJ</StyledButton>
                </div>
            </form>
        </StyledWrapper>
        <Modal showModal={showModal} error={error} content={message} />
        </>
    );
};

export default AddPostForm;