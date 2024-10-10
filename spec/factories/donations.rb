FactoryBot.define do
  factory :donation do
    amount { "9.99" }
    payment_status { "successful" }
    save_payment_info { false }
    association :user
  end
end
