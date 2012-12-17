class CreateCookies < ActiveRecord::Migration
  def change
    create_table :cookies do |t|
      t.string :name
      t.string :boxes

      t.timestamps
    end
  end
end
