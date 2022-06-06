import React from 'react';
import Navigation from '../components/Navigation';
import Button from '../UI/Button';

const Results = () => {
  return (
    <div className='page'>
      <Navigation>
        <Button to="/" icon="arrow-left">К игре</Button>
      </Navigation>
      <div className="info">
        Функционал в разработке
      </div>
    </div>
  )
}

export default Results