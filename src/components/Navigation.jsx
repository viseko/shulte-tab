import React from 'react'

const Navigation = (props) => {
  return (
    <nav className='nav'>
      {props.children}
    </nav>
  )
}

export default Navigation;