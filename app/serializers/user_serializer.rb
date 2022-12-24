class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :first_name, :last_name, :email
end
