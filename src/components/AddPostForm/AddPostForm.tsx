import React, { useState } from 'react';
import StyledWrapper from './StyledWrapper';
import StyledButton from '../StyledButton/StyledButton';
import { useSelector } from 'react-redux';

interface IProps {
    show: boolean
}

const AddPostForm: React.FC<IProps> = ({show}) => {
    const [firstSentence, setFirstSentence] = useState('joint');
    const [textAreaValue, setTextAreaValue] = useState(
        firstSentence === 'joint' ? 'Kiedy ostatnio paliłem/am papierosa...'
                        : firstSentence === 'edible' ? 'Kiedy ostatnio jadłem/am czekoladę...'
                        : ""
    );

    //User is true when he is logged
    const { user } = useSelector((state: any) => state.userReducer);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setFirstSentence(e.target.value);
        setTextAreaValue(
            e.target.value === 'joint' ? 'Kiedy ostatnio paliłem/am papierosa...'
                        : e.target.value === 'edible' ? 'Kiedy ostatnio jadłem/am czekoladę...'
                        : ""
        );
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.target.value);
    }

    return(
        <StyledWrapper show={show}>
            <form>
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
    );
};

export default AddPostForm;