class AddQuantityStartToCookieCases < ActiveRecord::Migration
  def change
    add_column :cookie_cases, :quantity_start, :integer
    add_column :cookie_cases, :quantity_end, :integer
    remove_column :cookie_cases, :quantity
  end
end
