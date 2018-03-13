import React from 'react';
import {EditForm} from '../EditForm/EditForm'


const Stock = ({stock, removeStock, editStock}) => {
  const{ date, high, low, open, close, volume } = stock;

  return (
    <article className="stock">
      <h4>Date: {date}</h4>
      <p>high: {high}</p>
      <p>low: {low}</p>
      <p>open: {open}</p>
      <p>close: {close}</p>
      <p>volume: {volume}</p>
      <button onClick={() => removeStock(date)}> delete </button>
      {/* <button onClick={() => editStock(date)> edit </button> */}
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