class CookiesController < ApplicationController
  def index
    @cookies = Cookie.all
    respond_to do |format|
      format.json { render json: @cookies }
    end
  end
end
