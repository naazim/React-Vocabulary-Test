import React from 'react';

const Progress = (props) => (
    <div className="progress">
        <div
            className="progress__percent"
            style={{ width: props.percentage + '%' }}
        ></div>
    </div>
);

export default Progress;