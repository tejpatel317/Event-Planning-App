class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t| 
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :location
      t.date :date
      t.time :time
      t.string :image_url

      t.timestamps
    end
  end
end
