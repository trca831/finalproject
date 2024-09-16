class School < ApplicationRecord
  has_many :teachers

  validates :name, presence: true, uniqueness: true, length: { minimum: 5 }
  validates :address, presence: true, length: { minimum: 10 }
  validates :address, format: {
    with: /\A\d{1,6}\s[A-Za-z0-9\s,'\-\.]{3,},\s[A-Za-z\s]+,\s[A-Z]{2}\s\d{5}(-\d{4})?\z/,
    message: "must be in the format '123 Main St, City, ST 12345' or '123 Main St, City, ST 12345-1234'"
  }
end
