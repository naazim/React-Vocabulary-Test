import React from 'react';

const Question = (props) => {
    const handleNext = (e) => {
        e.preventDefault();
        console.log('target', e.target);
        const enteredWord = document.querySelector('.question__input').value.trim();

        if (enteredWord !== '') {
            props.handleNext(enteredWord);
            document.querySelector('.question__input').value = '';
        }
    }
    return (
        <div>
            <div className="question__content">
                <h2 className="question__title">{props.count + 1}</h2>
                <div className="question__box">
                    <div className="question__text">{props.word.native}</div>
                    <input
                        className="question__input"
                        type="text"
                        placeholder="Enter Foreign Word"
                    />
                </div>
            </div>
            <div className="question__footer">
                {props.count > 0 && <button className="question__button question__button-previous">🡸</button>}
                <button className="question__button question__button-next" onClick={handleNext}>🡺</button>
            </div>
        </div>
    )
};

export default Question;