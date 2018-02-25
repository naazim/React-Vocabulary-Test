import React from 'react';

const ResultItem = (props) => {
    const {native, foreign, userAnswer} = props.word;
    return (
        <div className="result__item">
            <div className="result__icon">{props.index}</div>
            <div className="result__word">{native}</div>
            <div className="result__word">{foreign}</div>
            <div className="result__word">{userAnswer}</div>
            <div className={`result__icon ${foreign === userAnswer? 'result__icon--right' : 'result__icon--wrong'}`}>
                {foreign === userAnswer? '✔' : '✘'}
            </div>
        </div>
    );   
};

export default ResultItem;