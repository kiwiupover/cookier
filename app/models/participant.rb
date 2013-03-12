class Participant < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :parent, :phone

  belongs_to :user
end
