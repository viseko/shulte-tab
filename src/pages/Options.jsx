import React from 'react';
import Navigation from '../components/Navigation';
import Button from '../UI/Button';

const Options = () => {
  return (
    <div className='page'>
      <Navigation>
        <Button to="/">К игре</Button>
      </Navigation>
    </div>
  )
}

export default Options;