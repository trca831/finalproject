class Api::V1::KitItemsController < ApplicationController
  # load_and_authorize_resource

  # GET /api/v1/kit_items_only
  def index_kit_items_only
    kit_items = KitItem.all
    render json: kit_items
  end

  # POST /api/v1/kit_items_only
  def create_kit_items_only
    kit_item = KitItem.new(kit_item_params)

    if kit_item.save
      render json: kit_item, status: :created
    else
      render json: kit_item.errors, status: :unprocessable_entity
    end
  end

  def add_to_kit
    puts "Kit ID: #{params[:kit_id]}"
    puts "KitItem ID: #{params[:id]}"
    kit = Kit.find(params[:kit_id])
    kit_item = KitItem.find(params[:id])
    
    if kit.kit_items << kit_item
      render json: { message: 'Kit item successfully added to kit' }, status: :ok
    else
      render json: { errors: kit.errors.full_messages }, status: :unprocessable_entity
    end
  end
  

  # PATCH /api/v1/kit_items_only/:id
  def update_kit_items_only
    kit_item = KitItem.find(params[:id]) # Find the kit item by ID

    if kit_item.update(kit_item_params) # Update with strong parameters
      render json: { message: "Kit item updated successfully", kit_item: kit_item }, status: :ok
    else
      render json: { errors: kit_item.errors.full_messages }, status: :unprocessable_entity
    end
  end


  # GET /api/v1/kits/1/kit_items
  def index
    kit = Kit.find(params[:kit_id])
    kit_items = kit.kit_items
    render json: kit_items
  end

  # GET /api/v1/kits/1/kit_items/1
  def show
    @kit_item = KitItem.find(params[:id])
    render json: @kit_item
  end

  # POST /api/v1/kits/1/kit_items
  def create
    @kit_item = KitItem.new(kit_item_params)

    if @kit_item.save
      render json: @kit_item, status: :created, location: @kit_item
    else
      render json: @kit_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/kits/1/kit_items/1
  def update
    @kit_item = KitItem.find(params[:id])
    if @kit_item.update(kit_item_params)
      render json: @kit_item
    else
      render json: @kit_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/kits/1/kit_items/1
  def destroy
    @kit_item = KitItem.find(params[:id])
    @kit_item.destroy!
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_kit_item
    @kit_item = KitItem.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def kit_item_params
    params.require(:kit_item).permit(:name, :description, :image)
  end
end
