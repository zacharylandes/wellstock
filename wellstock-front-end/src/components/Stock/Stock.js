import React from 'react';


const Stock = ({stock}) => {
  const{ date, high, low, open, close, volume } = stock;

  return (
    <article className="stock">
      <h3>Date: {date}</h3>
      <p>high: {high}</p>
      <p>low: {low}</p>
      <p>open: {open}</p>
      <p>close: {close}</p>
      <p>volume: {volume}</p>
    </article>
  )
}

// Card.propTypes = {
//   removeIdea: func.isRequired,
//   idea: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired
//   }).isRequired
// }

export default Stock;