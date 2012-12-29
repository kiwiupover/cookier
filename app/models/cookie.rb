class Cookie < ActiveRecord::Base
  attr_accessible :boxes, :name

  belongs_to :site_sale
end
