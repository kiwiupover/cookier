class AddUserIdToParticipants < ActiveRecord::Migration
  def change
    add_column :participants, :user_id, :integer
    add_index :participants, :user_id
  end
end
