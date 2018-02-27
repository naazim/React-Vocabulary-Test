import React from 'react';

const ResultItem = (props) => {
    const { native, foreign, userAnswer } = props.word;
    return (
        <div className="result__item">
            <div className="result__count">{props.index}</div>
            <div className="result__default">
                <div className="result__word">{native}</div>
                <div className="result__word">{foreign}</div>
            </div>
            <div className={`result__answer ${foreign !== userAnswer ? 'result__error' : ''}`}>
                <span className="result__label">Your answer:</span>
                {userAnswer}
            </div>
        </div>
    );
};

export default ResultItem;