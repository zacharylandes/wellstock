class StockService 
    
    def create_stocks
        response = Faraday.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=#{ENV['ALPHA_KEY']}")
        stock = JSON.parse(response.body)["Time Series (Daily)"]
        stock.each do |stock|
        Stock.create(date:stock[0].to_date,
                     open:stock[1]["1. open"].to_f,
                     high:stock[1]["2. high"].to_f,
                     low:stock[1]["3. low"].to_f,
                     close:stock[1]["4. close"].to_f,
                     volume:stock[1]["5. volume"].to_f)      
        end
    end
end