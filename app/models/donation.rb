class Donation < ApplicationRecord
  belongs_to :user

  scope :active, -> { where(canceled: false) }
  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :payment_status, presence: true

  attribute :canceled, :boolean, default: false
end
