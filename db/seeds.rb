# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Business.delete_all
User.delete_all
Review.delete_all


noodleTime = Business.create!(
  name: "Noodle Time",
  address: "605 Battery St",
  website: "https://noodletimesf.com/",
  dollar_sign: "$$",
  category: "noodles",
  phone: "64912390",
  latitude: 37.796996,
  longitude: -122.400881
)

noodleTime.photos.attach(io: File.open("#{Rails.root}/app/assets/images/noodle_1.jpg"), filename: "noodle_1.jpg")
noodleTime.photos.attach(io: File.open("#{Rails.root}/app/assets/images/noodle_2.jpg"), filename: "noodle_2.jpg")
noodleTime.photos.attach(io: File.open("#{Rails.root}/app/assets/images/noodle_3.jpg"), filename: "noodle_3.jpg")


zazie = Business.create!(
  name: "Zazie",
  address: "941 Cole St
  San Francisco, CA 94117",
  website: "https://www.zaziesf.com/",
  dollar_sign: "$$",
  category: "Breakfast & Brunch",
  phone: "(415)564-5332",
  latitude: 37.765250,
  longitude: -122.450030
)

zazie.photos.attach(io: File.open("#{Rails.root}/app/assets/images/seed_2.jpg"), filename: "seed_2.jpg")
zazie.photos.attach(io: File.open("#{Rails.root}/app/assets/images/zazzie.jpg"), filename: "zazzie.jpg")
zazie.photos.attach(io: File.open("#{Rails.root}/app/assets/images/zazzie_3.jpg"), filename: "zazzie_3.jpg")


surisan = Business.create!(
  name: "Surisan",
  address: "505 Beach St
San Francisco, CA 94133",
  website: "https://www.surisansf.com/",
  dollar_sign: "$$",
  category: "Korean",
  phone: "(415)771-8449",
  latitude: 37.806965,
  longitude: -122.417453
)

surisan.photos.attach(io: File.open("#{Rails.root}/app/assets/images/surisan_1.jpg"), filename: "surisan_1.jpg")
surisan.photos.attach(io: File.open("#{Rails.root}/app/assets/images/surisan_2.jpg"), filename: "surisan_2.jpg")
surisan.photos.attach(io: File.open("#{Rails.root}/app/assets/images/surisan_3.jpg"), filename: "surisan_3.jpg")



fog_harbor = Business.create!(
  name: "Fog Harbor Fish House",
  address: "Pier 39
  San Francisco, CA 94133",
  website: "https://www.fogharbor.com/",
  dollar_sign: "$$",
  category: "Seafood & Bar",
  phone: "(415)421-2442",
  latitude: 37.806784,
  longitude: -122.417557
)

fog_harbor.photos.attach(io: File.open("#{Rails.root}/app/assets/images/fog_harbor_1.jpg"), filename: "fog_harbor_1.jpg")
fog_harbor.photos.attach(io: File.open("#{Rails.root}/app/assets/images/fog_harbor_2.jpg"), filename: "fog_harbor_2.jpg")
fog_harbor.photos.attach(io: File.open("#{Rails.root}/app/assets/images/fog_harbor_3.jpg"), filename: "fog_harbor_3.jpg")



mango_crazy = Business.create!(
  name: "Mango Crazy",
  address: "51 Jefferson St
San Francisco, CA 94133",
  website: "https://www.mangocrazy.com/",
  dollar_sign: "$$",
  category: "Specialty Food",
  phone: "(415)926-8075",
  latitude: 37.808440,
  longitude: -122.413342
)

mango_crazy.photos.attach(io: File.open("#{Rails.root}/app/assets/images/mango_crazy_1.jpg"), filename: "mango_crazy_1.jpg")
mango_crazy.photos.attach(io: File.open("#{Rails.root}/app/assets/images/mango_crazy_2.jpg"), filename: "mango_crazy_2.jpg")
mango_crazy.photos.attach(io: File.open("#{Rails.root}/app/assets/images/mango_crazy_3.jpg"), filename: "mango_crazy_3.jpg")

wayfare_tavern = Business.create!(
  name: "Wayfare Tavern",
  address: "558 Sacramento St
San Francisco, CA 94111",
  website: "https://www.wayfaretavern.com/",
  dollar_sign: "$$$",
  category: "American(Traditional)",
  phone: "(415)772-9060",
  latitude: 37.794016,
  longitude: -122.402350
)

wayfare_tavern.photos.attach(io: File.open("#{Rails.root}/app/assets/images/wayfare_1.jpg"), filename: "wayfare_1.jpg")
wayfare_tavern.photos.attach(io: File.open("#{Rails.root}/app/assets/images/wayfare_2.jpg"), filename: "wayfare_2.jpg")
wayfare_tavern.photos.attach(io: File.open("#{Rails.root}/app/assets/images/wayfare_3.jpg"), filename: "wayfare_3.jpg")

user_1 = User.create!(
  id: 1,
  email: "cool_story@bro.com",
  password: "password"
)

user_2 = User.create!(
  id: 2,
  email: "whoa_fam@gmail.com",
  password: "wokewoke"
)



comment_1 = Review.create!(
  rating: 3,
  body: "could use some work EWWWW",
  user_id:1,
  business_id:1
)

comment_2 = Review.create!(
  rating: 3,
  body: "I agree With cool story",
  user_id:2,
  business_id:1
)