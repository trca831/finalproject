class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :school_name, :school_address

  # Custom method to include school name
  def school_name
    object.school.name
  end

  # Custom method to include school address
  def school_address
    object.school.address
  end
end
