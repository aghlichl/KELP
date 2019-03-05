class Business < ApplicationRecord
    validates :name, :category, :dollar_sign, :address, :latitude, :longitude, :phone, :website, presence: true
    has_many_attached :photos
end 