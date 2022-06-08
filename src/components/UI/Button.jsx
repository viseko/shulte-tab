import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

import "../../styles/btn.css";

const Button = ({children, to, icon}) => {
  return (
    <Link className='btn' to={to}>
      {
        icon && 
        <Icon width={20} height={20} name={icon} />
      }
      {children}
    </Link>
  )
}

export default Button;