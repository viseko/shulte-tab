import React from 'react';

import "../styles/recordlist.css";
import RuleList from './RecordList/RuleList';

const RecordList = ({data}) => {
  const getDateCell = (ms) => {
    const date = new Date(ms);
    const year = date.getFullYear().toString().slice(2);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const mins = date.getMinutes();

    return (
      <td className='recordlist__date'>
        <span className='recordlist__date-date'>
          {day < 10 && "0"}{day}.
          {month < 10 && "0"}{month}.
          {year}
        </span>
        <span className="recordlist__date-time">
        {hours < 10 && "0"}{hours}:
        {mins < 10 && "0"}{mins}
        </span>
      </td>)
  };

  const showData = () => {
    return data.map(rec => (
      <tr key={rec.date}>
        { getDateCell(rec.date) }
        <td>{rec.time}</td>
        <td>{rec.size}x{rec.size}</td>
        <td>
          <RuleList data={rec} />
        </td>
      </tr>
    ))
  };

  return (
    <div className='recordlist'>
      <table className="recordlist__table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Секунд</th>
            <th>Размер</th>
            <th>Правила</th>
          </tr> 
        </thead>
        <tbody>
          { showData() }
        </tbody>
      </table>
    </div>
  )
}

export default RecordList