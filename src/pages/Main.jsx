import React from 'react';

import Game from '../components/Game';
import Navigation from '../components/Navigation';
import Button from '../components/UI/Button';

const Main = () => {
  return (
    <div className='page'>
      <Navigation>
        <Button to="info" icon="info">Об игре</Button>
        <Button to="options" icon="settings">Опции</Button>
        <Button to="results" icon="chart">Результаты</Button>
      </Navigation>
      <Game />
    </div>
  );
};

export default Main;