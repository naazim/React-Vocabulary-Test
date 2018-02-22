import React from 'react';
import {Link} from 'react-router-dom';
import Progress from './Progress';

const Action = (props) => (
  <div>
    <Progress percentage={props.percentage} />
    <Link
      to={props.hasOptions ? '/test' : '/'}
      className="big-button"
    >
      Take Test
      </Link>
  </div>
);

export default Action;
