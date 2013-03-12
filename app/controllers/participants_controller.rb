class ParticipantsController < ApplicationController
  before_filter :authenticate_user!

  def index
    participant = current_user.participants.all
    render json: participant
  end

  def show
    participant = current_user.participants.find(params[:id])
    render json: participant
  end

  def create
    participant = current_user.participants.new(params[:participant])
    if participant.save
      render json: participant, status: :created
    else
      render json: participant.errors, status: :unprocessable_entity
    end
  end

  def update
    participant = current_user.participants.find(params[:id])

    if participant.update_attributes(params[:participant])
      render json: participant, status: :ok
    else
      render json: participant.errors, status: :unprocessable_entity
    end
  end

  def destroy
    participant = current_user.participants.find(params[:id])
    participant.destroy
    render json: nil, status: :ok
  end
end
