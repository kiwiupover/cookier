class CookiesController < ApplicationController
  def index
    cookies = Cookie.all
    render json: cookies
  end
end
