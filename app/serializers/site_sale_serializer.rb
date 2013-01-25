class SiteSaleSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :location, :start_at, :end_at

  has_many :cookie_cases
end
