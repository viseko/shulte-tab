import React from 'react';

import "../styles/content-links.css";

const ContentLins = ({data, cb, currentChapter}) => {
  return (
    <ul className="content-links">
        {data.map((chapter, index) => {
          return (
            <li key={chapter.title}>
              {
                currentChapter !== index
                  ?
                  (<button className='content-links__link' onClick={() => cb(index)}>
                    {chapter.title}
                  </button>)
                  :
                  (<span className='content-links__link content-links__link--active'>
                    {chapter.title}
                  </span>)
              }
            </li>
          )
        })}
      </ul>
  )
}

export default ContentLins