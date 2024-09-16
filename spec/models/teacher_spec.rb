# spec/models/teacher_spec.rb
require 'rails_helper'

RSpec.describe Teacher, type: :model do
  let(:school) { create(:school) }
  let(:teacher) { create(:teacher, school: school) }

  context 'validations' do
    it 'is valid with a name, valid email, and valid school_id' do
      expect(teacher).to be_valid
    end

    it 'is not valid without a name' do
      teacher.name = nil
      expect(teacher).to_not be_valid
      expect(teacher.errors[:name]).to include("can't be blank")
    end

    it 'is not valid without an email' do
      teacher.email = nil
      expect(teacher).to_not be_valid
      expect(teacher.errors[:email]).to include("can't be blank")
    end
  end

  context 'associations' do
    it 'belongs to a school' do
      expect(teacher.school).to eq(school)
    end
  end
end
