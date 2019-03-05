json.extract! @business, :id, :name, :category, :dollar_sign, :address, :latitude, :longitude, :phone, :website

json.photoUrls @business.photos.map { |file| url_for(file) }
