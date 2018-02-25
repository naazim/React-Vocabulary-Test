import React from 'react';
import ResultItem from './ResultItem';

const Result = (props) => (
    <div className="result">
        <div className="result__item result__header">
            <div className="result__icon">#</div>
            <div className="result__word">Native Word</div>
            <div className="result__word">Foreign Word</div>
            <div className="result__word">Your Answer</div>
            <div className="result__icon">?</div>
        </div>
        {props.wordList.map((word, index) => (
            <ResultItem key={index} word={word} index={index} />
        ))}
    </div>
);

export default Result;