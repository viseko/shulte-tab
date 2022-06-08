import React from 'react';

import Icon from './UI/Icon';

import "../styles/pagination.css";

const Pagination = (props) => {
  const {
    currentPage,
    changePage,
    max,
    className
  } = props;

  return (
    <div className={className + " pagination"} >
      <button
        className="pagination__btn"
        disabled={currentPage === 0}
        onClick={() => {changePage(currentPage - 1)}}
      >
        <Icon width="20" height="20" name="arrow-left" />
      </button>

      <span className="pagination__value">
        {currentPage + 1} / {max}
      </span>

      <button
        className="pagination__btn"
        disabled={currentPage === max - 1}
        onClick={() => { changePage(currentPage + 1) }}
      >
        <Icon width="20" height="20" name="arrow-right" />
      </button>
    </div>
  )
}

export default Pagination;