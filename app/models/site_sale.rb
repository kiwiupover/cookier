class SiteSale < ActiveRecord::Base
  attr_accessible :location, :start_date, :start_time, :cookie_cases_attributes, :cookie_cases

  belongs_to :user
  has_many :cookie_cases

  accepts_nested_attributes_for :cookie_cases
end
