class SiteSale < ActiveRecord::Base
  attr_accessible :end_at, :location, :start_at

  has_many :cookie_cases
end
