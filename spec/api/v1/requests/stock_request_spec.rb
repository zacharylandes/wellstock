require 'rails_helper'

describe 'stocks' do 
    describe 'get request' do
        it 'can perform get requests' do 
            create_list(:stock, 10)

            get '/api/v1/stocks'

            stocks = JSON.parse(response.body)

            expect(stocks.count).to eq(10)
        
            expect(response).to be_success
        end 

        it 'can show a stock' do 
            stock = create(:stock, id:1)

            get '/api/v1/stocks/1'

            stock = JSON.parse(response.body)

            expect(stock['date']).to eq("2018-03-03")
    
            expect(response).to be_success
        end 

        it 'can find a stock with search params' do 
            stock = create(:stock, id:1)

            get '/api/v1/stocks/?date=2018-03-03'

            stock = JSON.parse(response.body)
            expect(stock.first['date']).to eq("2018-03-03")
    
            expect(response).to be_success
        end 

        it 'can post a stock' do 
            post '/api/v1/stocks/?date=2018-03-23&low=43%2e65&high=65%2e343&open=55%2e55&close=43%2e65&volume=123%2e44'
           
            expect(response).to be_success
            stock = JSON.parse(response.body)
            expect(stock['date']).to eq("2018-03-23")
            expect(stock['low']).to eq(43.65)
        end 
        it 'can update a stock' do 
            stock = create(:stock, id:12)
            
            put '/api/v1/stocks/12?date=2018-04-23&low=13%2e65&high=65%2e343&open=15%2e55&close=43%2e65&volume=123%2e44'
            
            expect(response).to be_success
            stock = JSON.parse(response.body)

            expect(stock['date']).to eq("2018-04-23")
            expect(stock['low']).to eq(13.65)
        end 

        it 'can delete a stock' do 
            stock1 = create(:stock, id:10)
            stock2 = create(:stock, id:11)
            
            delete '/api/v1/stocks/11'

            expect(response).to be_success
            stock = JSON.parse(response.body)
            expect(Stock.count).to eq(1)
        end 
    end
end