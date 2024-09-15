class Teacher < ApplicationRecord
  belongs_to :school
  has_many :kit_requests
end
