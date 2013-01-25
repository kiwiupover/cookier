class AddSiteSaleIdToCookieCase < ActiveRecord::Migration
  def change
    add_column :cookie_cases, :site_sale_id, :integer
  end
end
