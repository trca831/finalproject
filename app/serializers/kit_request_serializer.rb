class KitRequestSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :request_name, :request_email, :requested_kit, :requested_kit_id, :school_name, :school_address, :school_year, :created_at

  def request_name
    object.user.name if object.user.present?
  end

  def requested_kit
    object.kit.name if object.kit.present?
  end

  def requested_kit_id
    object.kit.id if object.kit.present?
  end

  def request_email
    object.user.email if object.user.present?
  end
end
