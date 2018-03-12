require 'rails_helper'
describe 'stock_service'do
    it 'can create stocks from the alpha vantage api' do 
        VCR.use_cassette 'create_stocks' do 
            stocks  = StockService.new.create_stocks 

            expect(stocks.count).to be > 4000
        end
    end
end