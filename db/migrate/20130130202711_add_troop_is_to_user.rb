class AddTroopIsToUser < ActiveRecord::Migration
  def change
    add_column :users, :troop_id, :integer
    remove_column :users, :troup_number
    add_index :users, :troop_id
  end
end
