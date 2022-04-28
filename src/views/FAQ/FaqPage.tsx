import React from 'react';
import StyledContainer from './StyledContainer';
import QuestionAndAnswer from '../../components/QuestionAndAnswer/QuestionAndAnswer';

const faq = [
    {
        q: "Czemu służy portal Stonersi?",
        a: "Strona powstała w celu edukacyjno - chilloutowo - humorystycznym :)"
    },
    {
        q: "Dlaczego mojego wpisu nie widać na stronie głównej?",
        a: "Wszystkie dodane przez użytkowników wpisy muszą zostać zatwierdzone przez moderatora."
    },
    {
        q: "O co chodzi z tymi 'jointami do przypalenia?'",
        a: "Każdy dodany post zbiera punkty, tzw. przypalone jointy. Zalogowany użytkownik ma do wykorzystania 3 jointy do przypalenia każdego dnia, które może przyznać dowolnym wpisom."
    },
    {
        q: "Pozostało mi 0 jointów do przypalenia, co teraz?",
        a: "Ilość jointów jest resetowana każdego dnia. Jeśli kolejnego dnia po zalogowaniu nadal widzisz 0, poczekaj chwilę, niedługo powinieneś otrzymać swoje 'punkty do przyznania' ;)"
    },
    {
        q: "W zakładce FILMY nie mogę obejrzeć niektórych filmów",
        a: "Wynika to z polityki serwisu Youtube. Czasami filmy są objęte ograniczeniami wiekowymi i można je obejrzeć tylko w wyżej wymienionym serwisie."
    },
    {
        q: "Co to za ikona przekreślonego głośnika u góry?",
        a: "Kliknij, może nieco podgłośnij swoje głośniki i poczekaj chwilę ;)"
    }
];

const FaqPage = () => {

    return(
        <StyledContainer>
            <h1>FAQ</h1>
            {faq.map(({q, a}) =>
                <QuestionAndAnswer q={q} a={a} />
            )}
        </StyledContainer>
    );
};

export default FaqPage;