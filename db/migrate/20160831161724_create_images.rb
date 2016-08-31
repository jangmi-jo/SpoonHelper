class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.integer :order
      t.references :imageable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end