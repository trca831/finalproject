class Api::V1::KitItemsController < ApplicationController
  before_action :set_kit_item, only: %i[ show update destroy ]

  # GET /kit_items
  def index
    @kit_items = KitItem.all

    render json: @kit_items
  end

  # GET /kit_items/1
  def show
    render json: @kit_item
  end

  # POST /kit_items
  def create
    @kit_item = KitItem.new(kit_item_params)

    if @kit_item.save
      render json: @kit_item, status: :created, location: @kit_item
    else
      render json: @kit_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /kit_items/1
  def update
    if @kit_item.update(kit_item_params)
      render json: @kit_item
    else
      render json: @kit_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /kit_items/1
  def destroy
    @kit_item.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kit_item
      @kit_item = KitItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def kit_item_params
      params.require(:kit_item).permit(:name, :description, :kit_id)
    end
end
