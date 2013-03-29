class ApplicationController < ActionController::Base
  protect_from_forgery

  respond_to :html

  layout :layout_by_resource

  protected

  def layout_by_resource
    if devise_controller?
      "devise_layout"
    else
      "application"
    end
  end

end
