import React, { useState } from 'react';
import StyledWrapper from './StyledWrapper';
import { BsArrowDownCircle } from 'react-icons/bs';

interface IProps {
    q: string
    a: string
}

//For FaqPage
const QuestionAndAnswer: React.FC<IProps> = ({q, a}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(prevState => !prevState);
    };

    return(
        <StyledWrapper showAnswer={showAnswer}>
            <p className="question" onClick={handleClick}>{q} <BsArrowDownCircle /></p>
            <p className="answer">{a}</p>
        </StyledWrapper>
    );
};

export default QuestionAndAnswer;