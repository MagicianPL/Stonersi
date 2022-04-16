import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Input from '../Input/Input';
import StyledButton from '../StyledButton/StyledButton';
import { TailSpin } from  'react-loader-spinner'
import { hideCommentModal, createNewComment } from '../../state/actions/commentsActions';

const StyledWrapper = styled.div<{loading: Boolean, success: any, error: any}>`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

    form {
        background: white;
        border-radius: 8px;
        padding: 15px 10px;
        width: 100%;
        max-width: 800px;
        min-height: 100px;
        ${ (({loading, success, error}) => loading || success || error ? `
        display: flex;
        justify-content: center;
        ` : null)

        }

        h1 {
            text-align: center;
            margin-bottom: 25px;
            background: rgba(0, 0, 0, 0.1);
            padding: 5px 0;
            border-radius: 4px;
        }

        textarea {
            min-height: 100px;
            font-size: 18px;
        }

        .actions {
            width: 100%;
            display: flex;
            gap: 20px;
            justify-content: flex-start;
        }

        p {
            text-align: center;
            font-weight: bold;
            font-size: 24px;
        }
    }
`;

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