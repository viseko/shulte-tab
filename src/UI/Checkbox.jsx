import React from 'react';
import getRandomHash from '../utils/getRandomHash';

import "../styles/checkbox.css";

const Checkbox = ({label, value, name, cb}) => {
  const id = name + "-" + getRandomHash(4);
  const checked = !!value;

  return (
    <div className='checkbox'>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => cb(name, e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox;