class DonationSerializer < ActiveModel::Serializer
  attributes :id, :donor_name, :donor_email, :amount, :created_at

  def donor_name
    object.user.name if object.user.present?
  end

  def donor_email
    object.user.email if object.user.present?
  end
end
