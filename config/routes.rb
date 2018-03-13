Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'api/v1/stocks#index'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: 'home#show'

  namespace :api do
    namespace :v1 do
      resources :stocks
    end
  end
end
