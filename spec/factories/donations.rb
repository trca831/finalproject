FactoryBot.define do
  factory :donation do
    amount { "9.99" }
    user { nil }
    payment_status { "MyString" }
    save_payment_info { false }
  end
end
