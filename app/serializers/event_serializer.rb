class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :location, :date, :time, :image_url

  has_many :reservations

  def time
    object.time.strftime("%I:%M %p")
  end
  
end
