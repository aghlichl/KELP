json.business do
  json.extract! @business, :id, :name, :category, :dollar_sign, :address, :latitude, :longitude, :phone, :website, :review_ids

  json.photoUrls @business.photos.map { |file| url_for(file) }
end

  @business.reviews.includes(:user).each do |review|
    json.reviews do
      json.set! review.id do
        json.extract! review, :id, :body, :rating
      end
    end

    json.users do
      json.set! review.user.id do
        json.extract! review.user, :id, :email
      end
    end
  end