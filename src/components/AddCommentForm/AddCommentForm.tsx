import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledWrapper from './StyledWrapper';
import Input from '../Input/Input';
import StyledButton from '../StyledButton/StyledButton';
import { TailSpin } from  'react-loader-spinner'
import { hideCommentModal, createNewComment } from '../../state/actions/commentsActions';


interface IProps {
    postId: String
}

const AddCommentForm: React.FC<IProps> = ({postId}) => {
    const { user } = useSelector((state: any) => state.userReducer);
    const { loading, success, error } = useSelector((state: any) => state.addCommentFormReducer);
    const [comment, setComment] = useState("");
    useEffect(() => console.log(loading, success, error))
    const handleTextChange = (e: any) => {
        setComment(e.target.value);
    };

    const dispatch = useDispatch();
    const handleCanceling = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(hideCommentModal());
    };

    const handleNewCommentSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        dispatch(createNewComment({
            author: user._id,
            content: comment,
            postId
        }, user?.token));
    };

    return(
        <StyledWrapper loading={loading} success={success} error={error} >
            <form>
                {!loading && !success && !error ?
                <>
                <h1>Dodaj komentarz</h1>
                <Input onChange={handleTextChange} type="textarea" id="comment" label="Twój komentarz" placeholder="Śmiało, naskrob coś!" />
                <div className="actions">
                    <StyledButton center onClick={handleNewCommentSubmit}>Dodaj</StyledButton>
                    <StyledButton center color="red" onClick={handleCanceling}>Anuluj</StyledButton>
                </div>
                </>
                :
                success ?
                <p>{success}</p>
                :
                error ?
                <p>{error}</p>
                :
                <TailSpin color="green" height={120} width={120} />
                }
            </form>
        </StyledWrapper>
    );
};

export default AddCommentForm;