# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_09_16_050024) do
  create_table "kit_items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "kit_items_kits", id: false, force: :cascade do |t|
    t.integer "kit_id", null: false
    t.integer "kit_item_id", null: false
  end

  create_table "kit_requests", force: :cascade do |t|
    t.string "grade_level"
    t.string "school_year"
    t.integer "teacher_id", null: false
    t.integer "kit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kit_id"], name: "index_kit_requests_on_kit_id"
    t.index ["teacher_id"], name: "index_kit_requests_on_teacher_id"
  end

  create_table "kits", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "grade_level"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "school_id", null: false
    t.index ["school_id"], name: "index_teachers_on_school_id"
  end

  add_foreign_key "kit_requests", "kits"
  add_foreign_key "kit_requests", "teachers"
  add_foreign_key "teachers", "schools"
end
