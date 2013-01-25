class CookieCasesController < ApplicationController

  def index
    cookie_cases = CookieCase.all
    render json: cookie_cases
  end

  def show
    cookie_case = CookieCase.find(params[:id])
    render json: cookie_case
  end

end
