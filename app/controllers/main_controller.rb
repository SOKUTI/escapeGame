class MainController < ApplicationController
  def index
    redirect_to new_user_session_path and return unless user_signed_in?
    if Item.exists?(user_id: current_user.id)
      @dataExistence = 1
      @items = Item.find_by(user_id: current_user.id)
    else
      @dataExistence = 0
    end
  end

  def create
    @items = Item.new(item_params)
    if @items.save
      respond_to do |format|
        format.json
      end
    else
      render :index
    end
  end

  def update
    @items = Item.find_by(user_id: params[:user_id])
    if @items.update(item_params)
    else
      render :index
    end
  end

  private

  def item_params
    params.permit(:box, :tile_o, :tile_p, :tile_e, :tile_n, :driver, :tile, :key).merge(user_id: current_user.id)
  end

end
