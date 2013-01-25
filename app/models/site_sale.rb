class SiteSale < ActiveRecord::Base
  attr_accessible :end_at, :location, :start_at, :cookie_cases_attributes

  has_many :cookie_cases

  accepts_nested_attributes_for :cookie_cases
end
