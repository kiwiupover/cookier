class CookieCasesController < ApplicationController

  def index
    cookie_cases = CookieCase.all
    render json: cookie_cases
  end

  def show
    cookie_case = CookieCase.find(params[:id])
    render json: cookie_case
  end

  def create
    @cookie_case =  CookieCase.new(params[:cookie_case])
    if @cookie_case.save
      render json: @cookie_case, status: :ok
    else
      render json: @cookie_case
    end

  end

end
