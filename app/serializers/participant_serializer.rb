class ParticipantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :parent
end
