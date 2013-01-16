class SiteSale < ActiveRecord::Base
  attr_accessible :end_at, :location, :start_at

  has_many :cookie_cases

  def active_model_serializer
    SiteSaleSerializer
  end
end
