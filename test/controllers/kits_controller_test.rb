require "test_helper"

class KitsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kit = kits(:one)
  end

  test "should get index" do
    get kits_url, as: :json
    assert_response :success
  end

  test "should create kit" do
    assert_difference("Kit.count") do
      post kits_url, params: { kit: { description: @kit.description, name: @kit.name } }, as: :json
    end

    assert_response :created
  end

  test "should show kit" do
    get kit_url(@kit), as: :json
    assert_response :success
  end

  test "should update kit" do
    patch kit_url(@kit), params: { kit: { description: @kit.description, name: @kit.name } }, as: :json
    assert_response :success
  end

  test "should destroy kit" do
    assert_difference("Kit.count", -1) do
      delete kit_url(@kit), as: :json
    end

    assert_response :no_content
  end
end
