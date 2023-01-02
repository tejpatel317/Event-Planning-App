class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date, :time, :image_url

  def time
    object.time.strftime("%I:%M %p")
  end
  
end
