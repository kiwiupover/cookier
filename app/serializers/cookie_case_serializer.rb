class CookieCaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity_start, :quantity_end
end