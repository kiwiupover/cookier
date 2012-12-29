class CookieSerializer < ActiveModel::Serializer
  attributes :id, :name, :boxes

  belongs_to :site_sale
end
