class Contact < ApplicationRecord
  belongs_to :user, optional: true

  validates :name, presence: true
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "must be a valid email format" }
  validates :message, presence: true
  validates :phone, presence: true, allow_blank: true, format: { with: /\A\d{3}-\d{3}-\d{4}\z/, message: "must be in the format 'XXX-XXX-XXXX'" }
end
