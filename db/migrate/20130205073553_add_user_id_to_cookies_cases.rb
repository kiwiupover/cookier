class AddUserIdToCookiesCases < ActiveRecord::Migration
  def change
    add_column :cookie_cases, :user_id, :integer
    add_index :cookie_cases, :user_id
  end
end
