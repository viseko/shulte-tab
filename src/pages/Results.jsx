import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Navigation from '../components/Navigation';
import Pagination from '../components/Pagination';
import RecordList from '../components/RecordList';
import Button from '../components/UI/Button';
import useRecords from '../hooks/useRecords';

const Results = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const {getRecords, isLoading} = useRecords();

  useEffect(() => {
    const query = {
      pageSize: 5,
      currentPage: currentPage
    };

    const data = getRecords(query);
    data.then(data => {
      setPageCount(data.pages);
      setData(data.result);
    })
  }, [currentPage]);

  const changePage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className='page'>
      <Navigation>
        <Button to="/" icon="arrow-left">К игре</Button>
      </Navigation>
      <div className="info">
        <RecordList data={data} />
        {
          (!isLoading) && (pageCount > 1) &&
          <Pagination
            currentPage={currentPage}
            max={pageCount}
            changePage={changePage}
          />
        }
      </div>
    </div>
  )
}

export default Results