import React from 'react';
import {Link} from 'react-router-dom';
import Progress from './Progress';

const Action = (props) => (
  <div>
    <Progress percentage={props.percentage} />
    <button
      onClick={props.handleTest}
      className="big-button"
    >
      Take Test
      </button>
  </div>
);

export default Action;
