import React from 'react';
import {Link} from 'react-router-dom';
import Progress from './Progress';

const Action = (props) => (
  <div>
    <Progress percentage={props.percentage} />
    <Link
      to="/test"
      className="big-button"
      disabled={!props.hasOptions}
    >
      Take Test
      </Link>
  </div>
);

export default Action;
