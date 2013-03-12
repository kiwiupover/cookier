class CreateSiteSale < ActiveRecord::Migration
  def change
    create_table :site_sales do |t|
      t.string :location
      t.datetime :start_at
      t.datetime :end_at

      t.timestamps
    end
  end
end
