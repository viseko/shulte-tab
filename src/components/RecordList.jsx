import React from 'react'

const RecordList = ({data}) => {
  const getDateCell = (ms) => {
    const date = new Date(ms);
    const year = date.getFullYear().toString().slice(2);
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const mins = date.getMinutes();

    return (
      <td className='recordlist__time-data'>
        <span className='recordlist__date'>
          {day < 10 && "0"}{day}.
          {month < 10 && "0"}{month}.
          {year}
        </span>
        <span className="recordlist__time">
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
        <td>{rec.size}</td>
      </tr>
    ))
  };

  return (
    <div className='recordlist'>
      <table className="recordlist__table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Время (сек)</th>
            <th>Размер поля</th>
            <th>Доп. опции</th>
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