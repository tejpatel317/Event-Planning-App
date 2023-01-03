class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :checkin_status
end
