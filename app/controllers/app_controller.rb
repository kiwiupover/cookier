class AppController < ApplicationController
  layout 'devise_layout'

  def index
    if current_user
      redirect_to controller: :cookies
    end
  end

end
