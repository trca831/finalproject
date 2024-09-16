FactoryBot.define do
  factory :teacher do
    name { "John Doe" }
    email { "johndoe@example.com" }
    association :school
  end
end
