Rails.application.routes.draw do
  devise_for :users
  root "main#index"
  resources :main, only: [:update, :create, :index]
  resources :users, only: [:edit, :update]
end
