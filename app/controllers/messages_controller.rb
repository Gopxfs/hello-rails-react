class MessagesController < ApplicationController
  def greeting_message
    @message = Message.random_message

    respond_to do |format|
      format.html { render json: @message }
      format.json { render json: @message }
    end
  end
end
