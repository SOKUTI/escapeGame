class ChangeDatatypeBoxOfItems < ActiveRecord::Migration[5.2]
  def change
    change_column :items, :box, :integer
  end
end
