class Teacher < ApplicationRecord
  belongs_to :school
  has_many :kit_requests

  validates :name, presence: true, length: { minimum: 5 }
  validates :email, presence: true, uniqueness: true
  validate :valid_email_format
  validates :school_id, presence: true

  private

  def valid_email_format
    email_str = email.to_s.strip
    unless Truemail.valid?(email_str, with: :regex)
      errors.add(:email, "is invalid. Please enter a valid email address.")
    end
  end
end
