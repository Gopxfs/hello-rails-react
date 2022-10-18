class MessagesController < ApplicationController
  def greeting_message
    @message = Message.random_message

    response.set_header('Access-Control-Allow-Origin', '*')

    respond_to do |format|
      format.html { render json: @message }
      format.json { render json: @message }
    end
  end
end
