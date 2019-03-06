class Api::BusinessesController < ApplicationController

  def index
    if searchName
      @businesses = Business.with_attached_photos.where('name ILIKE ?', "%#{searchName}%")
    else 
      @businesses = Business.with_attached_photos
    end 
      
      render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  def searchName
    params[:name]
  end 
  
end
