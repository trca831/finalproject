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
5.times do
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
    school_id: school_ids.sample
  )
end

# Seeding Kits
kits = Kit.create([
  { name: 'Discovery Kit', description: 'Learning materials appropriate for grades Pre-K through 2nd grade. It emphasizes exploration and learning about differences from an early age.', grade_level: 'PK-2' },
  { name: 'Empowerment Kit', description: 'Learning materials appropriate for grades 3rd through 5th grade. It promotes self-awareness and respect for others.', grade_level: '3-5' },
  { name: 'Perspectives Kit', description: 'Learning materials for middle school grades 6th through 8th. It aims to broaden understanding of different viewpoints and experiences.', grade_level: '6-8' },
  { name: 'Impact Kit', description: 'Learning materials for high school grades 9th through 12th. It aims to inspire meaningful action and change.', grade_level: '9-12' }
])

# Seeding KitItems
kit_items = KitItem.create([
  { name: 'Counting Blocks', description: 'Blocks to help with counting and basic math skills.' },
  { name: 'Phonics Cards', description: 'Cards for learning phonics.' },
  { name: 'Science Experiment Set', description: 'Basic science experiment materials for 3rd-5th grade.' },
  { name: 'Math Puzzles', description: 'Puzzles to challenge math skills in 6th-8th grade.' },
  { name: 'Sensory Fidgets', description: 'Occupy their head as well as their hands with these effective sensory fidgets for 9th-12th grade.' }
])

# Associate KitItems with Kits using the join table
discovery_kit = Kit.find_by(name: 'Discovery Kit')
empowerment_kit = Kit.find_by(name: 'Empowerment Kit')
perspectives_kit = Kit.find_by(name: 'Perspectives Kit')
impact_kit = Kit.find_by(name: 'Impact Kit')

# Attach images to Kits (using local files or remote URLs)
discovery_kit.image.attach(
  io: File.open('db/seed_img/blue-box.jpg'),
  filename: 'blue-box.jpg',
  content_type: 'image/jpeg',
  identify: false
)

empowerment_kit.image.attach(
  io: File.open('db/seed_img/green-box.jpg'),
  filename: 'green-box.jpg',
  content_type: 'image/jpeg',
  identify: false
)

perspectives_kit.image.attach(
  io: File.open('db/seed_img/purple-box.jpg'),
  filename: 'purple-box.jpg',
  content_type: 'image/jpeg',
  identify: false
)

impact_kit.image.attach(
  io: File.open('db/seed_img/gray-box.jpg'),
  filename: 'gray-box.jpg',
  content_type: 'image/jpeg',
  identify: false
)

counting_blocks = KitItem.find_by(name: 'Counting Blocks')
science_experiment_set = KitItem.find_by(name: 'Science Experiment Set')
math_puzzles = KitItem.find_by(name: 'Math Puzzles')
sensory_fidgets = KitItem.find_by(name: 'Sensory Fidgets')

# Now associate KitItems with Kits
discovery_kit.kit_items << counting_blocks
empowerment_kit.kit_items << science_experiment_set
perspectives_kit.kit_items << math_puzzles
impact_kit.kit_items << sensory_fidgets

# Seeding KitRequests
teacher = Teacher.first
teacher2 = Teacher.last

KitRequest.create([
  { grade_level: 'PK-2', school_year: '2024-2025', teacher: teacher, kit: discovery_kit },
  { grade_level: '3-5', school_year: '2024-2025', teacher: teacher2, kit: empowerment_kit }
])
