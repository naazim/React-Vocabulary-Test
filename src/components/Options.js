import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget__header">
      <h3 className="widget__title">Your word list</h3>
      <button
        className="button--link"
        onClick={props.handleDeleteOptions}
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
            optionText={option.native}
            optionText2={option.foreign}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
      })
    }
  </div>
);

export default Options;
