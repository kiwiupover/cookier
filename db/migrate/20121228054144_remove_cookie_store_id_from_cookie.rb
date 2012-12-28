class RemoveCookieStoreIdFromCookie < ActiveRecord::Migration
  def change
    remove_column :cookies, :cookie_store_id
  end
end
