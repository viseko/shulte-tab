import React from 'react'

const Icon = ({width, height, name}) => {
  return (
    <svg className='icon' width={width} height={height}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon