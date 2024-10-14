class ContactSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :name, :email, :phone, :message, :user_id

  def user_id
    object.user.id if object.user.present?
  end
end
