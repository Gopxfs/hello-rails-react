Rails.application.routes.draw do
  get '/greeting_message', to: 'messages#greeting_message'

  get 'root/index'
  root 'root#index'
end
