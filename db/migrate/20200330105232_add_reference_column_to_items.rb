class AddReferenceColumnToItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :user_id
    add_reference :items, :user, foreign_key: true
  end
end
