class AddColumnItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :box, :boolean, default: false
    add_column :items, :tile_o, :boolean, default: false
    add_column :items, :tile_p, :boolean, default: false
    add_column :items, :tile_e, :boolean, default: false
    add_column :items, :tile_n, :boolean, default: false
    add_column :items, :driver, :boolean, default: false
    add_column :items, :tile, :boolean, default: false
    add_column :items, :key, :boolean, default: false
  end
end
