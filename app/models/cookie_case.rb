class CookieCase < ActiveRecord::Base
  attr_accessible :name, :quantity_start, :quantity_end, :site_sale_id, :user_id

  belongs_to :site_sale
  belongs_to :user

  def cases_count
    "#{cases_base_ten.to_i} cases and boxes #{boxes_left_over}"
  end

  def cases_base_ten
    quantity.to_i / 12.0
  end

  def boxes_left_over
    (12*(cases_base_ten - cases_base_ten.to_i)).round
  end

end
