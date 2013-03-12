class AddUserIdToSiteSales < ActiveRecord::Migration
  def change
    add_column :site_sales, :user_id, :integer
    add_index :site_sales, :user_id
  end
end
