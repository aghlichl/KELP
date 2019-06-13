class Api::BusinessesController < ApplicationController

  def index
    if searchName
      @businesses = Business.with_attached_photos.where('name ILIKE  ? OR category ILIKE ?', "%#{searchName}%", "%#{searchName}%")
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

  def searchCategory
    params[:category]
  end
  
end
