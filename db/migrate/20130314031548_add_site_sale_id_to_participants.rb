class AddSiteSaleIdToParticipants < ActiveRecord::Migration
  def change
    add_column :participants, :site_sale_id, :integer
    add_index :participants, :site_sale_id
  end
end
