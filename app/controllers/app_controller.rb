class AppController < ApplicationController
  layout 'devise'
  def index

    if current_user
      redirect_to controller: :cookies
    end
  end

end
