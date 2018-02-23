import React from 'react';

const Question = (props) => {
    const handleUpdate = (e) => {
        e.preventDefault();
        const status = document.querySelector('.question__input').value.toLowerCase() === props.word.foreign.toLowerCase();
        console.log(status)
        return status;
    }
    return (
        <div className="question">
            <h2 className="question__title">Question no: {props.count}</h2>
            <form onSubmit={handleUpdate}>
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
                    <button className="question__button">🡺</button>
                </div>
            </form>
        </div>
    )
};

export default Question;