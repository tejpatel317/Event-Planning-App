class Event < ApplicationRecord
    belongs_to :user
    has_many :reservations
    has_many :users, through: :reservations


    validates :name, presence: true
    validates :location, presence: true
    validates :date, presence: true
    validates :time, presence: true
    validates :image_url, presence: true
end
