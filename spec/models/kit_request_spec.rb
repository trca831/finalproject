require "rails_helper"

RSpec.describe KitRequest, type: :model do
  let (:kit_request) { create (:kit_request) }

  it "is valid with valid attributes" do
    expect(kit_request).to be_valid
  end

  it "is not valid without a grade_level" do
    kit_request.grade_level = nil
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a valid grade_level" do
    kit_request.grade_level = "It"
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a valid school_year" do
    kit_request.school_year = "Not valid"
    expect(kit_request).to_not be_valid
  end

  it "is not valid without a school_year" do
    kit_request.school_year = nil
    expect(kit_request).to_not be_valid
  end


  it { should belong_to (:kit) }
end
