require "rails_helper"

RSpec.describe KitRequest, type: :model do
  let(:user) { create(:user) }
  let(:kit) { create(:kit) }
  let(:kit_request) { create(:kit_request, user: user, kit: kit) }

  it "is valid with valid attributes" do
    expect(kit_request).to be_valid
  end

  it "is not valid without a valid school_year" do
    kit_request = build(:kit_request, user: user, school_year: "Not valid")
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a school_year" do
    kit_request = build(:kit_request, user: user, school_year: nil)
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a valid phone number" do
    kit_request = build(:kit_request, user: user, phone: "333445")
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a phone number" do
    kit_request = build(:kit_request, user: user, phone: nil)
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a school_name" do
    kit_request = build(:kit_request, user: user, school_name: nil)
    expect(kit_request).to_not be_valid
  end

  it { should belong_to(:user) }

  it { should belong_to(:kit) }
end
