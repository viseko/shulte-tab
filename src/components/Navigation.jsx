import React from 'react';
import "../styles/navigation.css";

const Navigation = (props) => {
  return (
    <nav className='nav'>
      {props.children}
    </nav>
  )
}

export default Navigation;