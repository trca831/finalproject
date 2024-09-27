class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # Guest user (not logged in)

    if user.role == "admin"
      can :manage, :all # Admins can manage everything
    else
      # Allow users to update their own profile
      can :update, User, id: user.id
      can :read, KitRequest, user_id: user.id # Users can read their own kit requests
      can :create, KitRequest # Users can create new kit requests
      can [ :update, :destroy ], KitRequest, user_id: user.id # Users can update or destroy their own kit requests
      can :read, Kit
      can :read, KitItem
      can :create, Donation
      can :read, Donation, user_id: user.id

    end
  end
end
