class User < ApplicationRecord
    has_many :reservations
    has_many :events, through: :reservations

    has_secure_password #Enables password encryption with bcrypt

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
end
