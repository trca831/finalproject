FactoryBot.define do
  factory :kit_request do
    grade_level { "PK-2" }
    school_year { "2024-2025" }
    association :kit
  end
end
