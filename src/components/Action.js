import React from 'react';
import Progress from './Progress';

const Action = (props) => (
  <div>
    <Progress percentage={props.percentage} />
    <button
      className="big-button"
      onClick={props.handleTest}
      disabled={!props.hasOptions}
    >
      Take Test
      </button>
  </div>
);

export default Action;
