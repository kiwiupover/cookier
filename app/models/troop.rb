class Troop < ActiveRecord::Base
  attr_accessible :name, :subdomain

  has_many :users

  def base_url
    if Rails.env.development?
      "http://#{self.subdomain}.lvh.me:3000"
    else
      "http://#{self.subdomain}.thinminting.com"
    end
  end
end
