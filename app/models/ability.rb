class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # Guest user (not logged in)

    if user.role == "admin"
      can :manage, :all # Admins can manage everything
    else
      # Define permissions for non-admin users
      can :read, :all # Regular users can read everything

      # Example of more specific permissions:
      # Allow users to update their own profile
      can :update, User, id: user.id

      # Example for another model, like 'Member':
      can :manage, Member, user_id: user.id # Allow users to manage their own members
    end
  end
end
