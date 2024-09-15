require "test_helper"

class KitRequestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kit_request = kit_requests(:one)
  end

  test "should get index" do
    get kit_requests_url, as: :json
    assert_response :success
  end

  test "should create kit_request" do
    assert_difference("KitRequest.count") do
      post kit_requests_url, params: { kit_request: { grade_level: @kit_request.grade_level, kit_id: @kit_request.kit_id, school_year: @kit_request.school_year, teacher_id: @kit_request.teacher_id } }, as: :json
    end

    assert_response :created
  end

  test "should show kit_request" do
    get kit_request_url(@kit_request), as: :json
    assert_response :success
  end

  test "should update kit_request" do
    patch kit_request_url(@kit_request), params: { kit_request: { grade_level: @kit_request.grade_level, kit_id: @kit_request.kit_id, school_year: @kit_request.school_year, teacher_id: @kit_request.teacher_id } }, as: :json
    assert_response :success
  end

  test "should destroy kit_request" do
    assert_difference("KitRequest.count", -1) do
      delete kit_request_url(@kit_request), as: :json
    end

    assert_response :no_content
  end
end
