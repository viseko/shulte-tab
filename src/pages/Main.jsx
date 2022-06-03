import React from 'react';
import Game from '../components/Game';
import Navigation from '../components/Navigation';
import Button from '../UI/Button';

const Main = () => {
  return (
    <div className='page'>
      <Navigation>
        <Button to="info">Об игре</Button>
        <Button to="options">Опции</Button>
        <Button to="results">Результаты</Button>
      </Navigation>
      <Game />
    </div>
  )
}

export default Main