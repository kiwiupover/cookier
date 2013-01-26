class RemoveColumnEndAt < ActiveRecord::Migration
  def up
    remove_column :site_sales, :end_at
    remove_column :site_sales, :start_at
    add_column :site_sales, :start_date, :date
    add_column :site_sales, :start_time, :string
  end

  def down
    add_column :site_sales, :end_at, :date
    add_column :site_sales, :start_at, :date
    remove_column :site_sales, :start_date
    remove_column :site_sales, :start_time
  end
end
