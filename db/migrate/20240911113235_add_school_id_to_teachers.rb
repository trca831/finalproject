class AddSchoolIdToTeachers < ActiveRecord::Migration[7.2]
  def change
    add_reference :teachers, :school, null: false, foreign_key: true
  end
end
