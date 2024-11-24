class User < ApplicationRecord
  # Provides a token for authentication and details for token expiration
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self

  # Defines available roles and sets default role as user.
  ROLES = %w[admin user].freeze
  has_many :kit_requests
  has_many :donations, -> { where(canceled: false) }
  has_many :contacts

  before_create :set_default_role

  # validates :name, presence: true
  validates :role, inclusion: { in: ROLES }

  def set_default_role
    self.role ||= "user"
  end
end
