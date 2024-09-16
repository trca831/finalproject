class KitRequest < ApplicationRecord
  belongs_to :teacher
  belongs_to :kit

  validates :grade_level, presence: true, inclusion: { in: %w[PK-2 3-5 6-8 9-12] }
  validates :school_year, presence: true, format: { with: /\A\d{4}-\d{4}\z/, message: "must be in the format 'YYYY-YYYY'" }
  validates :teacher_id, presence: true
  validates :kit_id, presence: true
end
