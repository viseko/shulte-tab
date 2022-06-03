import React from 'react'

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
          &lt;
        </button>
        <span className="number__value">{value}</span>
        <button className="number__control" disabled={isMax()} onClick={increase}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Number