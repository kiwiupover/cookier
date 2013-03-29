class CookieCasesController < ApplicationController
  before_filter :authenticate_user!

  def index
    cookie_cases = current_user.cookie_cases.all
    render json: cookie_cases
  end

  def show
    cookie_case = current_user.cookie_cases.find(params[:id])
    render json: cookie_case
  end

  def create
    cookie_case =  current_user.cookie_cases.new(params[:cookie_case])
    if cookie_case.save
      render json: cookie_case, status: :ok
    else
      render json: cookie_case
    end

  end

end
