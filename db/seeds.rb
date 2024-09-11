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
# Assuming you have at least 10 schools to associate with teachers
school_ids = School.pluck(:id)

20.times do
  Teacher.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    school: Faker::Educator.school_name,
    school_id: school_ids.sample  # Randomly assign a school to each teacher
  )
end
