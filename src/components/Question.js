import React from 'react';

const Question = (props) => {
    const handleNext = (e) => {
        e.preventDefault();
        console.log('target',e.target);
        const enteredWord = document.querySelector('.question__input').value.trim();

        if(enteredWord !== '') {
            props.handleNext(enteredWord);
            document.querySelector('.question__input').value = '';
        }
    }
    return (
        <div className="question">
            <h2 className="question__title">Question no: {props.count + 1}</h2>
                <div className="question__content">
                    <div className="question__text">{props.word.native}</div>
                    <input
                        className="question__input"
                        type="text"
                        placeholder="Enter Foreign Word"
                    />
                </div>
                <div className="question__footer">
                    <button className="question__button question__button-previous">🡸</button>
                    <button className="question__button" onClick={handleNext}>🡺</button>
                </div>
        </div>
    )
};

export default Question;