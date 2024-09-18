class KitItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url

  # Include image URL from ActiveStorage
  def image_url
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_url(object.image, only_path: false)
    end
  end
end
