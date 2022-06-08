import React from 'react';
import Icon from './Icon';

import "../../styles/number.css";

const Number = ({min, max, cb, value, label, name}) => {
  const isMax = () => {
    return (+value >= +max);
  };

  const isMin = () => {
    return (+value <= +min);
  };

  const increase = () => cb(name, +value + 1);
  const deсrease = () => cb(name, +value - 1);

  return (
    <div className='number'>
      {
        label && <div className="number__label">{label}</div>
      }
      <div className="number__input">
        <button className="number__control" disabled={isMin()} onClick={deсrease}>
          <Icon width="20" height="20" name="arrow-left" />
        </button>
        <span className="number__value">{value}</span>
        <button className="number__control" disabled={isMax()} onClick={increase}>
          <Icon width="20" height="20" name="arrow-right" />
        </button>
      </div>
    </div>
  )
}

export default Number