import React from 'react';
import ResultItem from './ResultItem';

const Result = (props) => {
    const filtered = props.wordList.filter((word) => word.foreign === word.userAnswer);
    const score = filtered.length / 20 * 100;

    const handleSubmit = () => {
        props.handleModule('CreateQuiz');
    };

    return (
        <div className="wrapper">
            <div className="result__header">
                <h1 className="result__title">Your score</h1>
                <div className="result__score">{score}%</div>
            </div>

            {props.wordList.map((word, index) => (
                <ResultItem key={index} word={word} index={index} />
            ))}

            <button
                onClick={handleSubmit}
                className="question__button question__button-next"
            >🡸</button>
        </div>
    );
};

export default Result;