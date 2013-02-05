class CookieCase < ActiveRecord::Base
  attr_accessible :name, :quantity, :site_sale_id

  belongs_to :site_sale

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
