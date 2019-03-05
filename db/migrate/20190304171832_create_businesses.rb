class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name,  null: false 
      t.string :category, null: false
      t.string :dollar_sign, null: false
      t.string :address, null: false 
      t.float :latitude, null: false 
      t.float :longitude, null: false
      t.string :phone, null: false  
      t.string :website, null: false
      
      t.timestamps 
    end
  end
end
