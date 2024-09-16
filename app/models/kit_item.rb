class KitItem < ApplicationRecord
  has_and_belongs_to_many :kits, join_table: "kit_items_kits"
end
