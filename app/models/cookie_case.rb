class CookieCase < ActiveRecord::Base
  attr_accessible :name, :quantity, :site_sale_id

  belongs_to :site_sale

  def active_model_serializer
    CookieCaseSerializer
  end
end
