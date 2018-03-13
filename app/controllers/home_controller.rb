class HomeController < ApplicationController

  def show
    if current_user
      render json: Stock.all   
    else
      output = {'signed_in' => 'false'}.to_json
      render :json => output   
    end
  end
  
end
