import React from 'react';
import Stock from '../Stock/Stock';



export const StockContainer = ({ stocks }) => {
    if(!stocks.length){
        return(
            <div className="StockContainer">
                loading
            </div>
        )
    }
    else{const renderedStocks =stocks.map(stock => 
            <Stock  stock={stock}
            key={stock.id} />)
            
        return (
            <div className="StockContainer">
                {renderedStocks}
            </div>
        )
    }
  }