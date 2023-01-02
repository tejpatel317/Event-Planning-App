class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date, :time, :image_url
end
