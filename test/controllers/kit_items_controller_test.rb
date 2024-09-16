require "test_helper"

class KitItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kit_item = kit_items(:one)
  end

  test "should get index" do
    get kit_items_url, as: :json
    assert_response :success
  end

  test "should create kit_item" do
    assert_difference("KitItem.count") do
      post kit_items_url, params: { kit_item: { description: @kit_item.description, kit_id: @kit_item.kit_id, name: @kit_item.name } }, as: :json
    end

    assert_response :created
  end

  test "should show kit_item" do
    get kit_item_url(@kit_item), as: :json
    assert_response :success
  end

  test "should update kit_item" do
    patch kit_item_url(@kit_item), params: { kit_item: { description: @kit_item.description, kit_id: @kit_item.kit_id, name: @kit_item.name } }, as: :json
    assert_response :success
  end

  test "should destroy kit_item" do
    assert_difference("KitItem.count", -1) do
      delete kit_item_url(@kit_item), as: :json
    end

    assert_response :no_content
  end
end
