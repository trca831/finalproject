class RemoveSchoolFromTeachers < ActiveRecord::Migration[7.2]
  def change
    remove_column :teachers, :school, :string
  end
end
