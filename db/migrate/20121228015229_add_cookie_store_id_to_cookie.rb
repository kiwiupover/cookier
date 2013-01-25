class AddCookieStoreIdToCookie < ActiveRecord::Migration
  def change
    add_column :cookies, :cookie_store_id, :integer
  end
end
