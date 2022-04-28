import React from 'react';
import StyledContainer from './StyledContainer';
import QuestionAndAnswer from '../../components/QuestionAndAnswer/QuestionAndAnswer';
import faq from '../../faq';

const FaqPage = () => {

    return(
        <StyledContainer>
            <h1>FAQ</h1>
            {faq.map(({q, a}) =>
                <QuestionAndAnswer key={q} q={q} a={a} />
            )}
        </StyledContainer>
    );
};

export default FaqPage;