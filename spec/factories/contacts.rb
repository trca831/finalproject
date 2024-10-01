FactoryBot.define do
  factory :contact do
    user { nil }
    name { "MyString" }
    email { "MyString" }
    phone { "MyString" }
    message { "MyText" }
  end
end
