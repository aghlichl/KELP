# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.delete_all


noodleTime = Business.create!(
  name: 'Noodle Time',
  address: '605 Battery St',
  website: 'https://noodletimesf.com/',
  dollar_sign: '$$',
  category: "noodles",
  phone: "64912390",
  latitude: 37.796996,
  longitude: -122.400881
)

noodleTime.photos.attach(io: File.open('./app/assets/images/yelp_splash_1.jpg'), filename: 'yelp_splash_1.jpg')
# noodleTime.photos.attach(io: File.open('./app/assets/images/yelp_splash_2.jpg'), filename: 'yelp_splash_2.jpg')
# noodleTime.photos.attach(io: File.open('./app/assets/images/yelp_splash_3.jpg'), filename: 'yelp_splash_3.jpg')


zazie = Business.create!(
  name: 'Zazie',
  address: '941 Cole St
  San Francisco, CA 94117',
  website: 'https://www.zaziesf.com/',
  dollar_sign: '$$',
  category: "Breakfast & Brunch",
  phone: "(415)564-5332",
  latitude: 37.765250,
  longitude: -122.450030
)

zazie.photos.attach(io: File.open('./app/assets/images/seed_2.jpg'), filename: 'seed_2.jpg')