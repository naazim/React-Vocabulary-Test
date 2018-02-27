import React from 'react';

const Question = (props) => {
    const handleNext = (e) => {
        e.preventDefault();
        const enteredWord = document.querySelector('.question__input').value;

        if (enteredWord.trim() !== '') {
            props.handleNext(enteredWord);
            document.querySelector('.question__input').value = '';
        }
    }

    return (
        <form onSubmit={handleNext}>
            <div className="question__content">
                <h2 className="question__title">{props.count + 1}</h2>
                <div className="question__box">
                    <div className="question__text">{props.word.native}</div>
                    <input
                        className="question__input"
                        type="text"
                        placeholder="Enter Foreign Word"
                        required
                        autoFocus
                    />
                </div>
            </div>
            <div className="question__footer">
                <button type="submit" className="question__button question__button-next">🡺</button>
            </div>
        </form>
    )
};

export default Question;