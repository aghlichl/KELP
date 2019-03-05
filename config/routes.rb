Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only:[:create, :destroy]
    resources :businesses, only: [:index, :show]
  end

    resources :businesses, only: :show
end