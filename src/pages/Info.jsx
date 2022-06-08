import React, { useState } from 'react';

import Navigation from '../components/Navigation';
import ContentLinks from '../components/ContentLinks';
import Pagination from '../components/Pagination';
import Button from '../components/UI/Button';
import readme, {origin} from '../content/readme';

import "../styles/info.css";

const Info = () => {
  const [currentChapter, setChapter] = useState(0);

  const changePage = pageNum => {
    setChapter(pageNum);
  };

  return (
    <div className='page'>
      <Navigation>
        <Button to="/" icon="arrow-left">Назад</Button>
        <ContentLinks data={readme} cb={changePage} currentChapter={currentChapter} />
      </Navigation>

      <div className="info">
        { readme[currentChapter].content }
        
        <div className="info__origin">
          Источник: <a href={origin[1]}>{origin[0]}</a>
        </div>

        <Pagination
          className="info__pagination"
          currentPage={currentChapter}
          changePage={changePage}
          max={readme.length}
        />
      </div>
    </div>
  );
};

export default Info;