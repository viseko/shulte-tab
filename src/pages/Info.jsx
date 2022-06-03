import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Button from '../UI/Button';
import readme, {origin} from '../content/readme.js';
import "../styles/content-links.css";
import "../styles/info.css";
import ContentLinks from '../components/ContentLinks';

const Info = () => {
  const [currentChapter, setChapter] = useState(0);

  const changePage = pageNum => {
    setChapter(pageNum);
  }

  return (
    <div className='page'>
      <Navigation>
        <Button to="/">К игре</Button>
        <ContentLinks data={readme} cb={changePage} currentChapter={currentChapter} />
      </Navigation>

      <div className="info">
        {
          readme[currentChapter].paragraphs.map((text, i) => <p key={i}>{text}</p>)
        }
        {
          !!readme[currentChapter].list &&
            <ul>
              {readme[currentChapter].list.map((text, i) => <li key={i}>{text}</li>)}
            </ul>
        }
        <div className="info__origin">
          Источник: {
            <a href={origin[1]}>{origin[0]}</a>
          }
        </div>
        <div className="info__pagination">
          <button disabled={currentChapter === 0} onClick={() => {setChapter(currentChapter - 1)}}>
            Пред.
          </button>
          <span>
            {currentChapter + 1} / {readme.length}
          </span>
          <button disabled={currentChapter === readme.length - 1} onClick={() => {setChapter(currentChapter + 1)}}>
            След.
          </button>
        </div>
      </div>
    </div>
  )
}

export default Info