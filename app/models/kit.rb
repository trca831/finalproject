class Kit < ApplicationRecord
  has_and_belongs_to_many :kit_items, join_table: "kit_items_kits"
end
