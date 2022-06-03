import React from 'react'

const Checkbox = ({label, value, name, cb}) => {
  const id = name;
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