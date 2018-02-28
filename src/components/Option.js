import React from 'react';

const Option = (props) => (
  <div className="option">
      <span className="option__text">{props.nativeWord}</span>
      <span className="option__text">{props.foreignWord}</span>
    <button
      className="button button--icon"
      onClick={(e) => {
        props.handleDeleteWord(props.count - 1);
      }}
    >
      ✖
      </button>
  </div>
);

export default Option;
