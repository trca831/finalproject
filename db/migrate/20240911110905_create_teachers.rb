class CreateTeachers < ActiveRecord::Migration[7.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :email
      t.string :school

      t.timestamps
    end
  end
end
