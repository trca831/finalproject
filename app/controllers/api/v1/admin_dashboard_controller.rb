class Api::V1::AdminDashboardController < ApplicationController
  # GET /api/v1/admin_dashboard
  def index
    users_count = User.count
    kit_requests_count = KitRequest.count
    total_donations = Donation.sum(:amount)
    if current_user.role === "admin"
    render json: {
      users_count: users_count,
      kit_requests_count: kit_requests_count,
      total_donations: total_donations
    }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
end
