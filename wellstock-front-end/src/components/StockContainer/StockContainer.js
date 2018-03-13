import React from 'react';
import Stock from '../Stock/Stock';



export const StockContainer = ({ stocks, removeStock, editStock }) => {
    if(!stocks.length){
        return(
            <div className="StockContainer">
                <p>loading</p>
            </div>
        )
    }
    else{const renderedStocks =stocks.map(stock => 
            <Stock  stock={stock}
            editStock={editStock}
            removeStock={removeStock}
            key={stock.id} />)
            
        return (
            <div className="StockContainer">
                {renderedStocks}
            </div>
        )
    }
  }