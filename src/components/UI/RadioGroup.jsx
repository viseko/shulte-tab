import React from 'react';
import getRandomHash from '../../utils/getRandomHash';

import "../../styles/radio-group.css";
import Icon from './Icon';

const RadioGroup = ({value, name, cb, options, label}) => {
  let currentValue = value;

  let hash = getRandomHash(4);

  const icons = {
    up: "order-up",
    down: "order-down",
    random: "order-random"
  };

  return (
    <div className='radio-group'>
      <div className="radio-group__label">{label}</div>
      <div className="radio-group__list">
        {
          options.map(({value, text}) => {
            const id = [name, value, hash].join("-");
            const checked = (value === currentValue);

            return (
              <div key={value} className="radio-group__item">
                <input
                  type="radio"
                  name={name}
                  value={value}
                  id={id}
                  checked={checked}
                  onChange={(e) => cb(name, e.target.value)}
                />
                <label htmlFor={id}>
                  <Icon width="30" height="30" name={icons[value]} />
                </label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RadioGroup