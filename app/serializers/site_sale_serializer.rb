class SiteSaleSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_date, :start_time

  has_many :cookie_cases
end
