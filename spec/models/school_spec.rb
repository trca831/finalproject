require "rails_helper"

RSpec.describe School, type: :model do
  let (:school) { create (:school) }

  it "is valid with valid attributes" do
    expect(school).to be_valid
  end

  it "is not valid without a name" do
    school.name = nil
    expect(school).to_not be_valid
  end

  it "is not valid without a valid name" do
    school.name = "Mo"
    expect(school).to_not be_valid
  end

  it "is not valid with an incomplete address" do
    school.address = "Main St, Los Angeles, CA"
    expect(school).to_not be_valid
  end

  it { should have_many (:teachers) }
end
