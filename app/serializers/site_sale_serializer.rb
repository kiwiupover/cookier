class SiteSaleSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_at, :end_at

  has_many :cookie_cases
end
