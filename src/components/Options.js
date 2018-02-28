import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget__header">
      <h3 className="widget__title">Your word list</h3>
      <button
        className="button--link"
        onClick={props.handleDeleteAll}
      >
        Remove All
    </button>
    </div>

    {props.options.length === 0 && <p className="widget__message">Please create Vocabulary list to get started!</p>}
    {
      props.options.map((option, index) => {
        return (
          <Option
            key={index}
            nativeWord={option.native}
            foreignWord={option.foreign}
            count={index + 1}
            handleDeleteWord={props.handleDeleteWord}
          />
        )
      })
    }
  </div>
);

export default Options;
