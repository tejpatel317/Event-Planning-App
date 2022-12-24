class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :event_id
      t.boolean :checkin_status

      t.timestamps
    end
  end
end
