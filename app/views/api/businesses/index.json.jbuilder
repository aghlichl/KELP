@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :category, :dollar_sign, :address, :phone
    json.photo url_for(business.photos.first)
  end
end