class ChangeReviewIndex < ActiveRecord::Migration[5.2]
  def change
     remove_index :reviews, :user_id
     remove_index :reviews, :business_id
     add_index :reviews, [:user_id, :business_id], unique: true
  end
end
