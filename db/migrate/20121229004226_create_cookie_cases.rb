class CreateCookieCases < ActiveRecord::Migration
  def change
    create_table :cookie_cases do |t|
      t.string :name
      t.string :quantity

      t.timestamps
    end
  end
end
