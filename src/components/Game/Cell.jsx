import React from 'react'

const Cell = (props) => {
  const {num, cb, highlight} = props;

  const classes = ["board__cell"];
  if (highlight) classes.push("board__cell--clicked")

  return (
    <button
      className={classes.join(" ")}
      onClick={() => cb(num)}
    >
      {num}
    </button>
  );
}

export default Cell;