@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :category, :dollar_sign, :address, :latitude, :longitude, :phone
    json.photo url_for(business.photos.first)

    json.review do
      json.extract! business.reviews.first, :body
    end

    json.average_stars business.reviews.average(:rating)
    json.num_reviews business.reviews.count
  end
end