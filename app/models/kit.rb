class Kit < ApplicationRecord
  has_and_belongs_to_many :kit_items, join_table: "kit_items_kits"

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :grade_level, presence: true, inclusion: { in: %w[PK-2 3-5 6-8 9-12] }
end
