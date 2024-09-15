# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'faker'

# Clear tables
KitRequest.destroy_all
KitItem.destroy_all
Kit.destroy_all
Teacher.destroy_all
School.destroy_all

# Create sample schools
10.times do
  School.create!(
    name: Faker::Educator.school_name,
    address: Faker::Address.full_address
  )
end

# Create sample teachers
school_ids = School.pluck(:id)

10.times do
  Teacher.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    school_id: school_ids.sample  # Randomly assign a school to each teacher
  )
end

# Seeding Kits
Kit.create([
  { name: 'PK-2 Kit', description: 'Learning materials appropriate for grades Pre-K through 2nd grade.' },
  { name: '3-5 Kit', description: 'Learning materials appropriate for grades 3rd through 5th grade.' },
  { name: '6-8 Kit', description: 'Learning materials for middle school grades 6th through 8th.' }
])

# Seeding KitItems
KitItem.create([
  { name: 'Counting Blocks', description: 'Blocks to help with counting and basic math skills.', kit_id: Kit.find_by(name: 'PK-2 Kit').id },
  { name: 'Phonics Cards', description: 'Cards for learning phonics.', kit_id: Kit.find_by(name: 'PK-2 Kit').id },
  { name: 'Science Experiment Set', description: 'Basic science experiment materials for 3rd-5th grade.', kit_id: Kit.find_by(name: '3-5 Kit').id },
  { name: 'Math Puzzles', description: 'Puzzles to challenge math skills in 6th-8th grade.', kit_id: Kit.find_by(name: '6-8 Kit').id }
])

# Seeding KitRequests
teacher = Teacher.first
teacher2 = Teacher.last

KitRequest.create([
  { grade_level: 'Pre-K', school_year: '2024-2025', teacher: teacher, kit: Kit.find_by(name: 'PK-2 Kit') },
  { grade_level: '3rd Grade', school_year: '2024-2025', teacher: teacher2, kit: Kit.find_by(name: '3-5 Kit') }
])
