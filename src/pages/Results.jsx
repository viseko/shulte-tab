import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Navigation from '../components/Navigation';
import RecordList from '../components/RecordList';
import Button from '../components/UI/Button';
import useRecords from '../hooks/useRecords';

const Results = () => {
  const [data, setData] = useState([]);
  const {getRecords, isLoading} = useRecords();

  useEffect(() => {
    const data = getRecords();
    data.then(data => {
      setData(data);
    })
  }, []);

  return (
    <div className='page'>
      <Navigation>
        <Button to="/" icon="arrow-left">К игре</Button>
      </Navigation>
      <div className="info">
        {
          isLoading ? "Идёт загрузка" : <RecordList data={data} />
        }
      </div>
    </div>
  )
}

export default Results