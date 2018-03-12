

class Api::V1::StocksController < ApplicationController 

    def index 
       render json: Stock.all
    end

    def show 
       render json: Stock.find(params[:id])
    end 

    def create 
        stock = Stock.new(stock_params)
        if stock.save
          render json: Stock.find(stock.id)
        end
    end 

    def update 
       stock = Stock.find(params[:id])
       stock.update(stock_params)
       render json: Stock.find(stock.id)
    end 

    def destroy 
       stock = Stock.find(params[:id])
       stock.destroy
       render json: Stock.all
    end
    
    private 

    def stock_params
        params.permit(:date, :high, :low, :open, :close, :volume)
    end
    
end