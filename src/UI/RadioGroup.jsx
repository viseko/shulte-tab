import React from 'react'

const RadioGroup = ({value, name, cb, options, label}) => {
  let currentValue = value;

  return (
    <div className='radio-group'>
      <div className="radio-group__label">{label}</div>
      <div className="radio-group__list">
        {
          options.map(({value, text}) => {
            const id = [name, value].join("-");
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
                <label htmlFor={id}>{text}</label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RadioGroup