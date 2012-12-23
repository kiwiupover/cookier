class ParticipantsController < ApplicationController

  def index
    participant = Participant.all
    render json: participant
  end
end
