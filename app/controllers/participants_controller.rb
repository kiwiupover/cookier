class ParticipantsController < ApplicationController

  def index
    participant = Participant.all
    render json: participant
  end

  def show
    participant = Participant.find(params[:id])
    render json: participant
  end

  def create
    participant = Participant.new(params[:participant])
    if participant.save
      render json: participant, status: :created
    else
      render json: participant.errors, status: :unprocessable_entity
    end
  end

  def update
    participant = Participant.find(params[:id])

    if participant.update_attributes(params[:participant])
      render json: participant, status: :ok
    else
      render json: participant.errors, status: :unprocessable_entity
    end
  end

  def destroy
    participant = Participant.find(params[:id])
    participant.destroy
    render json: nil, status: :ok
  end
end
