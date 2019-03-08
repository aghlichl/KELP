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
  address: "941 Cole St",
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
  address: "505 Beach St",
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
  address: "Pier 39",
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
  address: "51 Jefferson St",
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
  address: "558 Sacramento St",
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


liho = Business.create!(
  name: "Liholiho Yacht Club",
  address: "871 Sutter St",
  website: "https://www.lycsf.com/",
  dollar_sign: "$$$",
  category: "American(New)",
  phone: "(415) 440-5446",
  latitude: 37.794016,
  longitude: -122.402350
)

liho.photos.attach(io: File.open("#{Rails.root}/app/assets/images/liho_1.jpg"), filename: "liho_1.jpg")
liho.photos.attach(io: File.open("#{Rails.root}/app/assets/images/liho_2.jpg"), filename: "liho_2.jpg")
liho.photos.attach(io: File.open("#{Rails.root}/app/assets/images/liho_3.jpg"), filename: "liho_3.jpg")


dragon = Business.create!(
  name: "Dragon Beaux",
  address: "5700 Geary Blvd",
  website: "https://www.dragonbeaux.com/",
  dollar_sign: "$$$",
  category: "Seafood",
  phone: "(415) 333-8899",
  latitude: 37.794016,
  longitude: -122.402350
)

dragon.photos.attach(io: File.open("#{Rails.root}/app/assets/images/dragon_1.jpg"), filename: "dragon_1.jpg")
dragon.photos.attach(io: File.open("#{Rails.root}/app/assets/images/dragon_2.jpg"), filename: "dragon_2.jpg")
dragon.photos.attach(io: File.open("#{Rails.root}/app/assets/images/dragon_3.jpg"), filename: "dragon_3.jpg")



pink = Business.create!(
  name: "The Pink Elephant",
  address: "142 Minna St",
  website: "https://www.pinkelephant.com/",
  dollar_sign: "$$",
  category: "Gastropubs",
  phone: "(415) 440-8446",
  latitude: 37.794016,
  longitude: -122.402350
)

pink.photos.attach(io: File.open("#{Rails.root}/app/assets/images/pink_1.jpg"), filename: "pink_1.jpg")
pink.photos.attach(io: File.open("#{Rails.root}/app/assets/images/pink_2.jpg"), filename: "pink_2.jpg")
pink.photos.attach(io: File.open("#{Rails.root}/app/assets/images/pink_3.jpg"), filename: "pink_3.jpg")



rooster = Business.create!(
  name: "Paper Rooster",
  address: "670 Larkin St",
  website: "https://www.paperrooster.com/",
  dollar_sign: "$$$",
  category: "Sandwiches",
  phone: "(415) 757-6873",
  latitude: 37.794016,
  longitude: -122.402350
)

rooster.photos.attach(io: File.open("#{Rails.root}/app/assets/images/rooster_1.jpg"), filename: "rooster_1.jpg")
rooster.photos.attach(io: File.open("#{Rails.root}/app/assets/images/rooster_2.jpg"), filename: "rooster_2.jpg")
rooster.photos.attach(io: File.open("#{Rails.root}/app/assets/images/rooster_3.jpg"), filename: "rooster_3.jpg")



gary = Business.create!(
  name: "Gary Danko",
  address: "800 N Point St",
  website: "https://www.garydanko.com/",
  dollar_sign: "$$$",
  category: "French",
  phone: "(415) 749-2060",
  latitude: 37.794016,
  longitude: -122.402350
)

gary.photos.attach(io: File.open("#{Rails.root}/app/assets/images/gary_1.jpg"), filename: "gary_1.jpg")
gary.photos.attach(io: File.open("#{Rails.root}/app/assets/images/gary_2.jpg"), filename: "gary_2.jpg")
gary.photos.attach(io: File.open("#{Rails.root}/app/assets/images/gary_3.jpg"), filename: "gary_3.jpg")



mitchell = Business.create!(
  name: "Mitchell's Ice Cream",
  address: "688 San Jose Ave",
  website: "https://www.mitchellsicecream.com/",
  dollar_sign: "$",
  category: "Ice Cream",
  phone: "(415) 648-2300",
  latitude: 37.794016,
  longitude: -122.402350
)

mitchell.photos.attach(io: File.open("#{Rails.root}/app/assets/images/mitchell_1.jpg"), filename: "mitchell_1.jpg")
mitchell.photos.attach(io: File.open("#{Rails.root}/app/assets/images/mitchell_2.jpg"), filename: "mitchell_2.jpg")
mitchell.photos.attach(io: File.open("#{Rails.root}/app/assets/images/mitchell_3.jpg"), filename: "mitchell_3.jpg")



maple = Business.create!(
  name: "Sweet Maple",
  address: "2101 Sutter St",
  website: "https://www.sweetmaplesf.com/",
  dollar_sign: "$$$",
  category: "American(Traditional)",
  phone: "(415) 655-9169",
  latitude: 37.794016,
  longitude: -122.402350
)

maple.photos.attach(io: File.open("#{Rails.root}/app/assets/images/maple_1.jpg"), filename: "maple_1.jpg")
maple.photos.attach(io: File.open("#{Rails.root}/app/assets/images/maple_2.jpg"), filename: "maple_2.jpg")
maple.photos.attach(io: File.open("#{Rails.root}/app/assets/images/maple_3.jpg"), filename: "maple_3.jpg")



user_1 = User.create!(
  id: 1,
  email: "test@test.com",
  password: "password"
)

user_2 = User.create!(
  id: 2,
  email: "whoa_fam@gmail.com",
  password: "wokewoke"
)
user_3 = User.create!(
  id: 3,
  email: "cool_story@bro.com",
  password: "password"
)

user_4 = User.create!(
  id: 4,
  email: "haseeb@gmail.com",
  password: "notpassword"
)
user_5 = User.create!(
  id: 5,
  email: "ronil@gmail.com",
  password: "thanksman"
)

user_6 = User.create!(
  id: 6,
  email: "Andy@gmail.com",
  password: "gotatan"
)
user_7 = User.create!(
  id: 7,
  email: "Jesse@gmail.com",
  password: "HYPEHYPE"
)

user_8 = User.create!(
  id: 8,
  email: "elliot@gmail.com",
  password: "divLord"
)



Review.create!(
rating: 5,
body: "I work not too far from here, and saw the reviews so I figured I'd check it out.

Being Vietnamese myself, and seeing that it was a family run place - I kind of had high expectations for this place. 

,I got the Shrimp Vermicelli Bowl, and I have to say - I was IMPRESSSED!!",
user_id: 1,
business_id: noodleTime.id
)

Review.create!(
rating:5,
body:"love this Cole Valley spot for brunch. close enough to Golden Gate Park to walk there afterwards and work off the excellent food!

great selection of omelettes, benedicts and pancakes. interesting mimosa choices too. there are some rotating brunch specialties too",
user_id: 1,
business_id: zazie.id
)

Review.create!(
rating:5,
body:"I really haven't look around for restaurants near Fisherman's Wharf.  I was interested in trying something new.  Korean was something I rarely try, so I yelped restaurants near me.  This restaurant came up as $$ and seemed easy enough to get to.  It is literally a tucked away restaurant where you descend into a very relaxing atmosphere.
I ordered the Dolson which is a delicious dish served on hot stone pot.  It is a beautifully decorated dish that stays hot and fresh through the experience.  Really nice and cozy place for friends, family or dating.
",
user_id: 1,
business_id: surisan.id
)

Review.create!(
rating:5,
body:"got seated about an hour ago. i believe in first impressions.. and i must say, i was quite disappointed with the two female hostess who were working...

they were standing there talking and they seemed irritated that we came up to them to ask for a table. didnt smile, no eye contact, negative body language. she walked way ahead of us as she was showing us to our table. she placed the menus and just walked away without saying a word. fog harbor you can do better!",
user_id: 1,
business_id: fog_harbor.id
)

Review.create!(
rating:5,
body:"While my friends and I were waiting in line at the Museum of 3D Illusions, we saw this place and we saw the beautiful Pina Del Mar display from the window. After our terrible experience at the museum, we headed here and it definitely cheered our mood up a lot. I really liked the colorful interior design of the place. The staff seemed pretty friendly as well, even when I noticed an avocado typo on the menu. ",
user_id: 1,
business_id: mango_crazy.id
)

Review.create!(
rating:5,
body:"We had our wedding reception in the Bartlett Room and everyone loved it. Mary was so easy to work with and the service day of was exceptional. 

Not only that but the food was outstanding as usually. Several people said it was the best food of any wedding they had ever attended and all our guests were blown away by the yumminess. ",
user_id: 1,
business_id: wayfare_tavern.id
)

Review.create!(
rating:5,
body:"I love Liholiho! 

Some of my favorite dishes include the duck liver toast, scallops with pork belly, wagyu ribeye, and of course the baked hawaii. :)  ",
user_id: 1,
business_id: liho.id
)

Review.create!(
rating:5,
body:"I've been wanting to try more dim sum places in San Francisco, and since my friend and I were in the area, we decided to try this place out! We arrived early before it opened at 5:30 pm and were first in line and were able to enjoy our food as soon as we ordered. 

Food:
- Five Guys Xiao Long Bao--$10.99
I've seen pictures of these colorful xiao long bao so many times and knew we had to get it. The dumpling skins were thin and delicate, and each of the fillings were flavorful. There was even a slice of carrot beneath each dumpling to add some texture and balance out the flavors. The different dumpling skins had subtle flavors and different fillings: Green- Spinach Skin with Kale filling, Black- Squid Ink Skin with Black Truffle filling, Yellow- Turmeric Skin with Crab Roe filling, White- Plain Skin with Pork filling, Dark Red- Beets Skin with Beet filling. 
- Crab Roe Shiu Mai--$5.75
These came out steaming hot and each bite was hearty and comforting. The shiu mai were stuffed with flavorful filling, and the crab roe added to the flavor well.
- Classic Shrimp Dumpling--$7.50
I was amazed by the amount of filling and the huge shrimp pieces stuffed in these dumplings. They certainly hit the satisfaction mark to the max. 

Tips:
- As with any dim sum place, come with a big group so you can try as many different items on the menu!",
user_id: 1,
business_id: dragon.id
)

Review.create!(
rating:5,
body:"Great experience and great vibes. Service was good, food good too. We were able to listen to music all while enjoying our meal and mimosas. Funny side note I was drinking mimosas minus the champaigne because I thought it was already mixed lmao",
user_id: 1,
business_id: pink.id
)

Review.create!(
rating:5,
body:"Wow. So much flavor. I got the General. It's a fried chicken breast flavored with some kind of spicy jasmine tea brine. High quality chicken, great flavor, bread was delicious, toppings (sweet chili sauce) were all very tasty and went well together!

The siracha chips were great as well. Lacked a little salt, but added it after and it was nice.",
user_id: 1,
business_id: rooster.id
)

Review.create!(
rating:5,
body:"Woah. I came with high expectations, and still, they were certainly met (rare). 

Many have remarked at Gary Danko as the best restaurant in SF. I can agree to this for a few reasons:

1. Price point - modestly affordable for a restaurant of this caliber. It is about 70-80$ for a 3 course tasting, which you can pick any combination of dishes from (for example, 3 entrees or 1 appetizer and two desserts if you so choose). This gives ultimate flexibility when ordering.

2. Variety of Dishes - there is truly something for everyone. I liked that there were dishes from a range of cultures, some French and some even Thai. Lots of dessert options which is awesome. I had the Louisiana butter cake and it was divine- not as buttery as I thought (good thing) but definitely a rich dessert. I also enjoyed the Thai Seafood curry A LOT and didn't expect to enjoy Thai from a french restaurant. My main was a perfectly cooked lamb, but I would probably try the beef or duck next time. The salmon is also popular here. Another thing that speaks to the value of this restaurant is the free taste in the beginning of a soup dish, complimentary bread (plain but good), and a small dessert sampler at the end with maybe 5-10 mini desserts- so cute! AND, My favorite part was the breakfast cake we got to take home! How adorable is that?! 

3. Service/Ambiance - the place here is for a special occasion- it is intimate yet loud. There is an opportunity to people watch or be private in the small space that seats only 65. Decor is classic yet stylish and the bar in the front is adorable. The staff looked after us very well!",
user_id: 1,
business_id: gary.id
)

Review.create!(
rating:5,
body:"Gourmet ice cream is one of my weaknesses and Mitchell's had me on my knees. On a random Sunday morning before I had to catch a flight, I bee-lined to Mitchell's right when they opened and there were a few people in line already! Good thing they are well-equipped in staff so I got to sample different flavors quickly. Thanks for your patience as I enjoyed all the samples. 

I ended up with the ube and 4 tropics, which included a lot of exotic flavors rolled into one. I also had bites of the coconut-flavor, maybe a few too many. ",
user_id: 1,
business_id: mitchell.id
)

Review.create!(
rating:5,
body:"A great place for brunch, sadly a line always exists.  Usually takes about 30 - 45minutes to be seated.  But once you are seated, it's well worth it!

The food is so tasty and fresh (especially the seafood-based dishes, in particular the crab ones!)

They have bottomless mimosas which is always awesome; and super tasty flavors of them at that!

Photo of Sweet Maple - San Francisco, CA, United States
",
user_id: 1,
business_id: maple.id
)




Review.create!(
rating:1,
body:"Terrible food, over priced for the neighborhood, 
employees are rude and portions are really small. 
I paid over $5 for a 'large coffee and was served a large cup 
less then half full that already had milk and someothertype of creamer in it. 
I asked why the cup was so empty when I paid so much and the cashier told me that's 
what the machine put out so it must be right in a very cocky tone, apparently he didn't want to put his phone down long enough to help me.",
user_id: 2,
business_id: noodleTime.id
)

Review.create!(
rating:5,
body:"I can't believe I haven't reviewed this place yet as I've been here over a handful of times!

4.5 stars (subtracting for inability to make a reservation and heavy wait times) so rounded up to a 5",
user_id: 2,
business_id: zazie.id
)

Review.create!(
rating:3,
body:"We went here for new year's eve dinner. I made a reservation for 2 at around 630 and when we got there we were seated immediately the place was not really packed but after 20-30 minutes, they started to have people waiting for tables. 
",
user_id: 2,
business_id: surisan.id
)

Review.create!(
rating:5,
body:"It's difficult to write a review when a meal puts your brain in the fog and leaves you at a lost for words. This establishment prepares food that turns words like tasty, delicious and mouth watering into dumb cliches. ",
user_id: 2,
business_id: fog_harbor.id
)

Review.create!(
rating:3,
body:"After eating some good in n out , Walking down fisherman's warf we came across this place wanting some dessert. We ordered the Biónico and Diablito. 
Hence the price Diablito-9.45 and Bionico 10.80 or so. 
FIRST, thing who ever knows these treats, knows that what brings a bionico together is the condensed milk, WHY CHARGE $.80 more for the condensed milk. Who doesn't know that will go ahead and pay it. Also the amount of fruit they serve is legit spread out into the container giving the illusion that it's plenty. Bottom line I was served a fruit salad, since I opted from paying the extra for the main ingredient that should be Part of it In the first place! 
NEXT, the Diablito. I was excited to see that it was with lemon sorbet, chamoy, and Tajín. Again the amount you get in the cup is no where worth the $9.45. The flavor was there. I do understand rent prices are high around here but geesh, don't rip off your customers
Not bashing this place as it was delicious but for the price and amount served I think I would really think about coming back. 

But any who , good concept. Good flavors!",
user_id: 2,
business_id: mango_crazy.id
)

Review.create!(
rating:3,
body:"Summary: Chicken was dry as the Sahara. If I were to compare this food with anything in this world, I'd compare it to taking a trip to the DMV without reservations.

It's not often I give bad reviews. I don't even like to do it, honestly. So wayfarer tavern was awfully disappointing.",
user_id: 2,
business_id: wayfare_tavern.id
)

Review.create!(
rating:2,
body:"Heard so many great things about Lihoiho and I couldn't wait to try it.

Unfortunately we had really weird / bad service and it totally ruined it for me.",
user_id: 2,
business_id: liho.id
)

Review.create!(
rating:3,
body:"Very nice store with great ambiance. Got there around 1 pm. Got seated around 1:45. It's a Sunday and it's busy. But the front desk was very attentive. 

Got seated in a little corner table and the table was shared with another couple was the only annoying part. Especially after I used the restroom and realized how big the restaurant really is. ",
user_id: 2,
business_id: dragon.id
)

Review.create!(
rating:4,
body:"Felt a little bit like a rave with a gang of drunk kids from that scene in the movie Blade.  Pretty grimy inside, with sticky floors, tables, counter tops etc.  And really LOUD music.

Even with a reservation, there was a super long line with an hr. wait.  Just when I was getting ready to call it, they announced our name in the line.",
user_id: 2,
business_id: pink.id
)

Review.create!(
rating:4,
body:"Omg this place is so fun! The line kinda sucks. I showed up at 945am 15 minutes before opening on a Saturday and the line was crazy long! Like a club line on a sat night lol. I could see why it was so popular though. It was my first time here and it's $22.99 for all you can drink mimosas that you serve yourself and there's like over 10 different juices! Apple, coconut, hibiscus, guava, orange, mango you name it they got it. My favorites were guava and hibiscus. You definitely have to get here early. Reservations are limited and on the weekends I believe the only time you can make a reservations is for 11am. Anything after is walk in only. ",
user_id: 2,
business_id: rooster.id
)

Review.create!(
rating:3,
body:"I was looking forward to my second visit at this restaurant. I hadn't been there in years and was excited to have another good experience. I got there half an hour early to set up for a surprise party and was greeted with a warm smile by the host.
I girlfriend and I were escorted to the private room, where we asked if we could set up some decorations (balloons & birthday banner). The female waiter said, we don't put tape up on our walls! She was a little curt and I said no problem. (In a restaurant of this caliber, no customer should know what the waiter is thinking by their behavior.) Maybe she realized she was a little harsh and came back with some removable tape and said we could tape around the window frame.",
user_id: 2,
business_id: gary.id
)

Review.create!(
rating:4,
body:"Forgot to take a picture of my ice cream when I first got it LOL, goes to show how great this place is!

Mitchell's ice cream is one of SF's oldest ice cream parlors and I'm glad I finally got to check this place out. What I like about the ice cream here is the variety of flavors from tropical (ube, mango, halo halo, etc) to sweet flavors (cookies and cream, grasshopper pie which tastes like thin mint, toasted almond). Despite the variety, the flavors are all really good and creamy!",
user_id: 2,
business_id: mitchell.id
)

Review.create!(
rating:4,
body:"Two blocks away from Japantown. 
Walked in on a Wednesday morning. No need to wait.
I ordered the wild xx with mushroom (I can't remember the name...) and add the signature bacon on side. 
I sit at the bar. The environment and decoration are great. Everything looks beautiful and the food.
The benedic is delicious but the bacon is just so so.maybe too heavy for me.
Great service also.",
user_id: 2,
business_id: maple.id
)






Review.create!(
rating:4,
body:"Pretty tasty spot that's hidden nearby the embarcadero   center. I love their garlic noodles from mealpal and the portion was the perfect amount. I looked at the menu and they have crab noodle soup too. Maybe I will try that next! FYI, this place take a little longer to prepare the food because they are fresh.",
user_id: 3,
business_id: noodleTime.id
)

Review.create!(
rating:4,
body:"I love France. Zazie is verrrrry France. Therefore, I love Zazie. 

The ambiance is so French brunchtime, it hurts. I know I'm just living a lie. I'm really not in France right now, and the moment this meal is done, I will have to walk out the doors and be back in real not-France again. But ya know... it's nice to pretend for a bit.",
user_id: 3,
business_id: zazie.id
)

Review.create!(
rating:4,
body:"PSA $20 bottomless mimosas for brunch.

Food was 5 stars but my experience there yesterday was maybe like a 3.5 so I'm giving this place 4 stars. 

Food - Great brunch especially if you're insanely hungry, because the portions are massive. I couldn't decide between the Korean brunch items and the regular egg brunch items, but in the end I decided to get the Surisan scramble because it came with Millionaire's bacon which apparently (I just learned) is a big deal.",
user_id: 3,
business_id: surisan.id
)

Review.create!(
rating:2,
body:"The plate looks beautiful but this is by far the worst surf and turf I've had before. It wasn't horrible but it just wasn't good. Nothing really had flavor besides the lobster & the steak had a lot of fat and was a little tough. It was my idea to come here because of the reviews and this happens to be my fav meal but unfortunately I won't be back. I love dead fish's surf and turf with crab, my absolute fav. Thought this would be way better because of the hype but it was a fail. The clam chowder in the bowl was good tho. Not fantastic, but good.",
user_id: 3,
business_id: fog_harbor.id
)

Review.create!(
rating:5,
body:"Just went to this place for the first time. Great cups of corn...you can tell this is not canned shit! Fresh real ingrediants only! The Aguas were fantastic! I had the watermelon and my girl had the mango. Top notch!! The owner and all employees were extremely nice and you can tell they really care about their product",
user_id: 3,
business_id: mango_crazy.id
)

Review.create!(
rating:4,
body:"Good grief the fried chicken was delicious combine that with the ambiance = a great lunch date 

It's everything you want from fried chicken: crispy chicken, moist meat, generous portion

Overall Thoughts

I definitely want to come back to check out the dinner options",
user_id: 3,
business_id: wayfare_tavern.id
)

Review.create!(
rating:5,
body:"One of my new favorite places in SF! I was really excited to finally get a reservation & definitely had high expectations. I went with two friends and we shared a few dishes family style.

Hopper Shrimp - the broccolini was better than the shrimp in my opinion! It was lightly breaded & was surprisingly flavorful...the shrimp was solid as well.",
user_id: 3,
business_id: liho.id
)

Review.create!(
rating:4,
body:"Fun times during Chinese New Year. My friends did the ordering and we ended up with a wonderful  selection of traditional and modern dishes, family style. 

The bar has saki and wine. 

The restaurant interior is a lot larger then it appears from the outside. Modern feel. Cold bathrooms. Quick service. ",
user_id: 3,
business_id: dragon.id
)

Review.create!(
rating:3,
body:"If you're looking for a cute/classy brunch spot - look elsewhere because this is not it! 

Pink Elephant Alibi gets pretty crowded (and ratchet) on the weekends for brunch. There are two separate lines outside so check in with the host and make sure you stand in the correct one (one for reservations and another for walk ins). When your table is ready, the security guard out front will check IDs, purses and pat you down if you're a guy. Note: entire party must be present to be seated!",
user_id: 3,
business_id: pink.id
)

Review.create!(
rating:4,
body:"I was greeted as soon as I came in. Service was  friendly for an order and sit down place.

There are counter seats by the window, three tall seats and three low seats and two high top tables of two",
user_id: 3,
business_id: rooster.id
)

Review.create!(
rating:5,
body:"Beyond excited to dine here the day after Valentines. 
You can either order the prix fixe or create your own menu with 3 or 4 courses.
Portions get smaller the more courses you choose.
I had 4 courses bc I'm a little piggy and I wanted to try a little bit of everything. Entire meal was fantastic and service was impeccable. They even gave all the ladies a long-stem rose and miniature box of chocolates to take home...probably was just for valentines but still a nice touch",
user_id: 3,
business_id: gary.id
)

Review.create!(
rating:2,
body:"Not worth the hype around here... Ice cream flavors are overwhelmed with cream instead of any taste of the flavor you wanted. Ube, mango or Thai tea, they all taste the same to me because of how strong the milk/cream was.",
user_id: 3,
business_id: mitchell.id
)

Review.create!(
rating:3,
body:"**Decent , pricey and slightly Memorable 

I'll keep It brief :-) 

I've yet to try their brunch (we all know weekend lines in SF are ridiculous )

But I HAD tried their millionaires bacon (specifically The breakfast sandwich)",
user_id: 3,
business_id: maple.id
)






Review.create!(
rating: 5,
body: "We work right around the corner from here and have this gem in our weekly rotation (sometimes 2 times a week!). Though it looks unassuming this family run business has amazingly good quality food. Everything is made fresh, all the rolls are made to order, they have deep delicious broth soups and are open to adjustments. I usually get the Pho without meat and sub extra veggies.",
user_id: 4,
business_id: noodleTime.id
)

Review.create!(
rating:1,
body:"Found a hair in the miracle pancakes, and asked the manager to remove the pancakes from the bill. 
He did not apologize and said that it was not their mistake. 
He lost four customers over $9, we will not be returning. 
Absolutely disgusting, 
0/10 for sanitation
0/10 for manager
0/10 for customer service. 
Would give lower rating if I could.
Absolutely disgusting.",
user_id: 4,
business_id: zazie.id
)

Review.create!(
rating:5,
body:"Amazing Benedicts with gorgeous, top-notch presentation and attention to detail. Their Millionaire bacon deserves a shout out, and given its Korean theme, reminds me of smoky, well-executed pork belly. Potatoes were crispy, and although the grilled tomato seemed random, it offered a moist textural balance to the potatoes (like ketchup). And I always love tomatoes, so what the hell. Their Country style Benedict was less stellar but still tasty. ",
user_id: 4,
business_id: surisan.id
)

Review.create!(
rating:4,
body:"Nice restaurant..great service.

Fish was really good. Friend got the lobster roll, she said it was excellent. 

Will definitely return on next visit to the Bay Area.",
user_id: 4,
business_id: fog_harbor.id
)

Review.create!(
rating:4,
body:"I always love trying new aqua fresh drinks and glad they had one near Fisherman's Wharf! Very clean and nice people. I tried samples of watermelon and strawberry I believe. I ordered the bionico which had a variety of fruits with honey and condensed milk which felt like desserts I've had in the past which was nice, sweet and refreshing.",
user_id: 4,
business_id: mango_crazy.id
)

Review.create!(
rating:4,
body:"Food. We all split the Fried Chicken, Akaroa Salmon, and 2 dishes of the Bouillabaisse. The Chicken was great, very moist, and the perfect amount of breading. Lots of flavor but you pay for it. The Salmon was cooked great, very flaky but I was hoping for some more flavor (presentation was great and it might of got my hopes up). The B-word was maybe the better dish due to the Lobster Broth. I waited until no one was looking and slurped it up like it was the remaining milk from a Cinnamon Toast crunch bowl of cereal. I'll bring a straw next time.

Service: Great service but expected from a fine dining restaurant like this.

Sidenote: Bring that straw",
user_id: 4,
business_id: wayfare_tavern.id
)

Review.create!(
rating:5,
body:"Another one of my favorite restaurants in SF! Believe the HYPE. It's really hard to get a resy, but walk ins are not too bad if you arrive when they open. Chef Ravi Kapur hails from Hawaii with Indian roots, hence this Hawaiian / Indian fusion. The interor is modern and sleek with huge open center kitchen.",
user_id: 4,
business_id: liho.id
)

Review.create!(
rating:5,
body:"I suddenly had the craving for dim sum earlier this afternoon. This is when I decided to come in, got a number and the wait was about 5-10 minutes. Very soon, I got a table. I came in on a rainy Friday afternoon and the wait was actually quite pleasant.",
user_id: 4,
business_id: dragon.id
)

Review.create!(
rating:4,
body:"I went to a Sunday brunch here and wow! My friends were not lying to me when they said it's basically a club. Brunch is just the excuse we all use here to drink endless mimosas for 2hrs LOL. 

They offer lots of variety with their mimosa flavors & it is self-service so yassss!!",
user_id: 4,
business_id: pink.id
)

Review.create!(
rating:5,
body:"Wow. Tried the emperor sandwich. It was an explosion of joy in my mouth. My first bite was met with the initial familiarity of a Chinese style crispy skin chicken. Then moments after was modern delight of a tangy Apple slice! I mean, who does that?!? It was amazing. I finished my meal so fast and sat there for another 10 minutes cooling down from the festival of flavors that just paraded through my tastebuds. ",
user_id: 4,
business_id: rooster.id
)

Review.create!(
rating:5,
body:"We visited Gary Danko on a Monday evening for my wife's birthday. The decor is classic with a modern touch. Although all tables were taken the whole time we were there, the noise level was very low. ",
user_id: 4,
business_id: gary.id
)

Review.create!(
rating:5,
body:"Oh my gosh - there aren't enough creative words to describe the deliciousness of this place. It's been a long time staple in San Francisco and I've been going for over 30 years! Introduced by my ex hubby - this relationship has lasted longer than my marriage .
",
user_id: 4,
business_id: mitchell.id
)

Review.create!(
rating:2,
body:"Should've planned ahead for the long line on Martin Luther King Jr. Day so I wasn't so disgruntled by the time we got to eat, but it is what it is. 

I was mainly disgruntled and disappointed because we got to the front of the line and were not seated for another 15 minutes as we watched numerous groups of two be seated in front of our group of three. ",
user_id: 4,
business_id: maple.id
)




Review.create!(
rating:4,
body: "Pretty good. Beefy broth and good amount of meat, soup, noodles ratio in my bun Bo hue. Plus, it's super near my workplace. Will come back and try their other items!

P.s. they take credit cards! Yessssssss",
user_id: 5,
business_id: noodleTime.id
)

Review.create!(
rating:2,
body:"2/01/2018:  ZAZIE from what my daughter and son-in-law, Andy proclaim is the go-to-breakfast restaurant for all of Cole Valley.  I was astonished my second-born daughter woke up early in order, putting our names in the ZAZIE BREAKFAST QUEUE by 8:15 AM-seriously, this restaurant has a queue serving breakfast!!!!!
",
user_id: 5,
business_id: zazie.id
)

Review.create!(
rating:4,
body:"I've neglected to try Surisan for a long time since I thought it was quite similar to a lot of SF brunch spots and was sort of a replica of Berkeley Social Club. I finally got to try it and parking was definitely tough as you would expect with a restaurant right next to Fisherman's wharf area, so be prepared for that. 
",
user_id: 5,
business_id: surisan.id
)

Review.create!(
rating:2,
body:"Dinner fail. We did want to like this place, but there was just too much wrong to make it right.

I put our name on the waiting list before we even left our hotel, and we got down to the general area well before the anticipated arrival time. We were a bit far away when I got the text message letting us know our table was ready, but we hustled over to check in with the hostess.",
user_id: 5,
business_id: fog_harbor.id
)

Review.create!(
rating:5,
body:"This place is exactly what the wharf needed. I've tried the Mango smoothie and the watermelon agua fresca, they're bomb. The chicharon is good, not you're basic snack. Definitely worth checking out.",
user_id: 5,
business_id: mango_crazy.id
)

Review.create!(
rating:4,
body:"A little pricey for lunch but really tasty fried chicken and an excellent mule! The polenta fries were a little adventurous for me but I liked them with the sauce.",
user_id: 5,
business_id: wayfare_tavern.id
)

Review.create!(
rating:5,
body:"It's been years since I've gone to a trendy restaurant, mostly because of the difficulty of getting in. As luck would have it I was invited to a b-day dinner with my sister. She had wanted to eat there for several months but told me how hard it was to get a table. A quick check of Yelp reviews clocked in at 1,994 (with a 4.5 star average). Wow. I was in, even though it was a Tuesday night (the old guy doesn't get out much on a school nights anymore).",
user_id: 5,
business_id: liho.id
)

Review.create!(
rating:4,
body:"Delicious hot pot, delicious dim sum. Especially their variety XLB. I came with my family and we got a split broth hot pot as well as a few dim sum dishes for dinner. The portions for most of the items were generous. I think they could be a bit more generous with the noodles, considering how low cost they are and they're not special hand-pulled or homemade noodles. Meat, vegetables were fresh and delicious.
",
user_id: 5,
business_id: dragon.id
)

Review.create!(
rating:4,
body:"Loud, rowdy, obnoxious - but all in a good way. Glad to see San Fran rocking out a brunch place like New York. We didn't actually know it was quite so slamming and showed up at 10:30 on a Saturday for food more than anything. Quite the entertainment. We managed to grab I believe the only two empty chairs in the entire place at the bar. It is loud. But fun. Even better the food was delicious. Had the Italian scramble, grilled cheese with bacon and the jerky bacon. All of it was very good. Staff was fast and effective considering how insanely busy it was. Fun place.",
user_id: 5,
business_id: pink.id
)

Review.create!(
rating:4,
body:"Tried this place for lunch with my colleagues and we went back again the next day- it was THAT good! One of the best fried chicken sandwiches- definite MUST TRY! Had the Warrior fried chicken sandwich, house made potato chips and Super ginger ale. So yummy! Great service and food-can't wait to go back.",
user_id: 5,
business_id: rooster.id
)

Review.create!(
rating:3,
body:"I've heard really good things about this place and had to check it off of my michelin list. Reservations were decently easy to book via OpenTable, but make sure you look early if you want a normal dinner time! There was valet in the front, which is super convenient. The place itself was pretty small, so the tables are pretty close together. People were dressed in suits, khaki's, dresses, etc. - definitely a mix between formal and smart casual. ",
user_id: 5,
business_id: gary.id
)

Review.create!(
rating:4,
body:"Providing the locals tasty frozen treats for decades in the City by the Bay. 

Located off the busy avenue, this quaint yet popular ice cream shop is bustling with locals, tourists, city workers.....young and old, all hoping to catch a scoop (or two) of delectable ice cream flavors. All, created and assembled on the premises. Hell, the SF Meter Maid parked her vehicle on the curb outside the shop door to quickly run in and grab some ice cream!",
user_id: 5,
business_id: mitchell.id
)

Review.create!(
rating:5,
body:"Came here for brunch on NYE after hearing only rave reviews about this place. Multiple SF friends said I HAD to try this place and get the Millionaire's Bacon, so we snagged our spot in line and braved the cold for 25 minutes. The staff graciously had hot coffee outside for everyone standing in line on this frigid, windy morning. A nice gesture, but I was DREAMING about going inside. 25 minutes later, we were seated... Right next to a window where other customers were waiting outside with their teeth chattering. I understood their pain. I hope they were  able to live vicariously through my meal to distract themselves.",
user_id: 5,
business_id: maple.id
)




Review.create!(
rating:3,
body:"Ordered meal pal from this place at for 11:45-12:00 pm pick up. At 12:44 (I'm still standing here waiting), it still hasn't finished yet. For people on tight schedules during lunch, this length of delay is unacceptable. Already paid for the food so now I'm just stuck. If Noodle Time can't make the food in time, the just shouldn't do meal pal.",
user_id: 6,
business_id: noodleTime.id
)

Review.create!(
rating:5,
body:"Time your visit right or fight the horde of hungry zombies lining out side Zazie!  The restaurant has a charming outdoor seating area in the back (shielded from the sun but can be winding depending on time of the day). One of the best things about dining here is that you get to pick your portion.  If you just want to sample something, go with a single.  If you're looking for something more voluminous (high five), you can always opt with a triple!
",
user_id: 6,
business_id: zazie.id
)

Review.create!(
rating:5,
body:"I was in San Francisco at the Infinity dealership getting my vehicle serviced today. As usually I'm always looking for somewhere and something interesting to check out and yelp never fails me. As you can see from the pictures I enjoyed myself very much. I like for my eyes to initially eat the food first then my mouth lol. The plating and preparation of the food really did it for me. The food was brought rather quickly as well. Not only does the food look but it was absolutely delicious. I did not have to wait at all came right in, I came on a good day. I highly recommend this place if you're in the area looking for somewhere good to eat at in San Francisco.#travelnurseswithoutboarders",
user_id: 6,
business_id: surisan.id
)

Review.create!(
rating:4,
body:"I'm not in love but I don't hate it. I came here after seeing all of the reviews on Yelp and honestly, I don't know why they are so high? I suppose I didn't eat the best item but I did get the tuna that was fresh from Hawaii and came recommended by the waitress. ",
user_id: 6,
business_id: fog_harbor.id
)

Review.create!(
rating:4,
body:"So if you do not have any nearby resources for quality Mexican food or food trucks nearby you would appreciate spending twice as much here for your fruit cravings with tajin peppers.  I get what they are trying to do but this brick and mortar means they must charge $10 a fruit cup.  This is okay unless you have been used to paying $5 for a fruit cup else where in San Leandro or Oakland or Hayward etc.  it is identical to the fruit vendor along side walk.  I can say I supported it here once but not sure if I can say I'll be back.

",
user_id: 6,
business_id: mango_crazy.id
)

Review.create!(
rating:5,
body:"The ambiance and food here is delicious. We had excellent service too! We got the fried chicken and the Sonoma chicken salad tartine. Both were delicious!! We would highly recommend, even though the prices were on the slightly higher side.",
user_id: 6,
business_id: wayfare_tavern.id
)

Review.create!(
rating:4,
body:"Ok so this place is a popular SF fave and yeah it took me this long to try it. I'm happy I did for the mix of friendly staff, open kitchen, chill vibe ambiance, bright woodsy look, and of course 90s music! I went with a gf who also loves food and this was her first time there so we were on the same wavelength of what to order lol.",
user_id: 6,
business_id: liho.id
)

Review.create!(
rating:4,
body:"My darling hubby surprised me with a trip to Dragon Beaux for their famous, colorful xiao long bao which surprisingly paled in comparison to the other delicious dishes we've tried. ",
user_id: 6,
business_id: dragon.id
)

Review.create!(
rating:1,
body:"I GOT PUKED ON 

So me and my friends went there for a birthday brunch. They didn't let us in because our whole party wasn't there (that's expected I wasn't too upset about that). We wait in line for our friend to come and as we're waiting the hostess comes out raising her voice at folks telling them to get to the back of the line even though they had a reservation. Again, I wasn't too upset about that because it wasn't too much of my business, but it was a bit rude and left a bit of a sour taste in my mouth. ",
user_id: 6,
business_id: pink.id
)

Review.create!(
rating:5,
body:"Great sandwich and chips. 
Friendly service, clean, quick and delicious. 
Great option for a quick, high quality bite to eat while attending a conference in SF. Would definitely recommend and hope to come back soon. Thanks",
user_id: 6,
business_id: rooster.id
)

Review.create!(
rating:5,
body:"Gary Danko absolutely blew me away. My husband and I came here during our honeymoon and were thoroughly impressed with everything, from service to the food to the morning-after pineapple cakes they gift you. I don't even like pineapple on cake!!!

Ok, disclaimer: this review is terrible. It's been like 8 months since we went and I've tried again and again to write a review except everything feels inadequate to describe the actual experience. The food is legitimately the best I've ever had. Every part of everything was RIGHT, if you can imagine that? In short, if you have the chance to come here, do it!!!!",
user_id: 6,
business_id: gary.id
)

Review.create!(
rating:5,
body:"A favorite for sf locals. Everyone knows about Mitchell's and everyone knows on a nice night in sf this place is packed. I love the Mexican chocolate & the mango ice cream from here it's delicious. I will always be a customer here!",
user_id: 6,
business_id: mitchell.id
)

Review.create!(
rating:4,
body:"A basic brunch that you can't go wrong with. Get there early on the weekends/holidays; by 10am, there was already a short wait for indoor seating. By 11am, there was a physical line of ~20 people. My friend and I chose to sit outside, but even though they offered velvety blankets, I would recommend not opting for outdoor seating unless it's 70F+. We ordered the Hass Omelet and the Marnier French Toast with berries to split between the two of us. Both dishes were not mind blowing, but definitely delicious and thoughtfully put together. ",
user_id: 6,
business_id: maple.id
)



Review.create!(
rating: 4,
body: "Got my noodle fix at a new spot today. The broth for this Crab Noodle Soup was so tasty. The crab meat balls were super yum too. Nothing beats mom's cooking but this came pretty close",
user_id: 7,
business_id: noodleTime.id
)

Review.create!(
rating:4,
body:"It's good, but I don't know if I quite get the hype in a city that is hardly starved for brunch options. My croque monsieur was a food example of the dish and wasn't overwhelmed by bechamel as sometimes happens. We also go the miracle pancakes (it changes periodically) that were basically fall spiced pancakes with some pumpkin puree. Anyways, we got there around 9 and were seated with the first group so we didn't really have to wait, which was nice.
",
user_id: 7,
business_id: zazie.id
)

Review.create!(
rating:4,
body:"Awesome place for brunch! Huge outdoor patio that is dog friendly! Indoor space is also huge and great for groups. Good service and nice combination of traditional brunch items and some fusion items.",
user_id: 7,
business_id: surisan.id
)

Review.create!(
rating:5,
body:"I ate here yesterday as my first meal ever in San Francisco and I was definitely not disappointed!

I came at happy hour time (around 4pm) and so I got to take part of some happy hour specials while sitting at the bar. I came here for the sourdough bread bowl of clam chowder, and probably would've been fine with just that - but I couldn't pass up the fried lemon calamari on the happy hour menu for $7, and was very happy that I got that as well! (And some wine, of course).
",
user_id: 7,
business_id: fog_harbor.id
)

Review.create!(
rating:5,
body:"Absolutely loved this place! The window display will immediately catch your attention with all the fresh fruit and delicious looking concoctions. My favorites are the Mangonadas and the Diablito. Beautiful location with a view. Wonderful and friendly staff. I will be coming back and you should too.

",
user_id: 7,
business_id: mango_crazy.id
)

Review.create!(
rating:3,
body:"Huge portions, but nothing special with the flavors. We ordered:
- burger with side of fried chickens(the burger is juicy, but the famous fried chicken taste like regular fried chicken)
- side of polenta(okay)
- side of mushroom(ok)
- side of mac and cheese(salty)
- beef tartare(ok)

Street parking was pretty easy to find on a saturday around noon.",
user_id: 7,
business_id: wayfare_tavern.id
)

Review.create!(
rating:4,
body:"They open at 5pm, we got there late around 5:15pm on a Saturday night. Wait for a table was 2.5 hours. We were happy to stand and eat at the end of the bar - there are two spots on the inner edge facing the seats. It gets a little tight with the dishes, so you just have to hope the other party is cool with it and they time it so you don't have too many things at a time.",
user_id: 7,
business_id: liho.id
)

Review.create!(
rating:5,
body:"Had a great experience at dragon beaux! The dim sum tasted really fresh and every dish was so flavorful. Even though the restaurant got packed quickly we still got all of our food relatively quickly! The service was excellent and the restaurant was clean. Definitely recommend this place for all your dim sum needs.",
user_id: 7,
business_id: dragon.id
)

Review.create!(
rating:4,
body:"Bottomless Mimosas. What else do you need?!! Had a great time.

Got a reservation through Yelp for Saturday 2:30 PM so no wait (they seemed to only have two reservation time options for weekend brunch, this or like 10 AM). It was popping",
user_id: 7,
business_id: pink.id
)

Review.create!(
rating:5,
body:"Just had one of the best fried chicken Sandos in my life.  It was seasoned overnight in tea leaves (very sidle) the spices and crunchiness were So fresh.  The tomatoes were slices perfectly thin and Stanley, the owner/attendant/cook is so helpful and proud of the food it gives even more gusto to customers.  Totally a great experience. And they offer great salads too.",
user_id: 7,
business_id: rooster.id
)

Review.create!(
rating:4,
body:"Gary Danko is the Nicholas Young I always knew I wanted in my life. Full of charm, chivalry, class, romance, wealth, and DELICIOUSNESS. 

As soon as I walked up, someone opened the door. Then greeted with extreme friendliness at the host stand. Immediately offered to have my coat hung. Waiter took my purse and hung with their purse hanger at the table. He pulled my chair out and as I sat he pushed in closer for me, placed the dinner napkin on my lap. Plates and utensils replaced immediately after each meal. ",
user_id: 7,
business_id: gary.id
)

Review.create!(
rating:2,
body:"I honestly don't know where all these high ratings come from. Having passed by Mitchell's multiple times in the car, I finally saved enough stomach room one night after dinner to make a quick stop here for ice cream.

As a newbie to Mitchell's, I didn't realize that we had to go inside to grab a number and wait to be called. We only discovered this when people who came in after us grabbed numbers. Even though they have some signage, it clearly wasn't enough. We grabbed our number and waited outside. Thankfully, it wasn't a cold SF night. We waited, and waited, and waited. It honestly seemed like it took forever before our number was called. The only good thing about waiting so long was that we didn't feel rushed narrowing down the flavors we wanted to try/order. I settled on an almond flavored one, and my bf settled on a chocolate peanut butter one.
",
user_id: 7,
business_id: mitchell.id
)

Review.create!(
rating:5,
body:"Sweet Maple is the only restaurant where I would willingly spend $20 on four pieces of bacon. An amazing brunch spot with a line that's almost longer than the venue itself. There is no open seating, you just have to wait to be admitted. If you opt in to sit outside, you will be seated quicker. 

We ordered the millionaire bacon flight. I have never seen such thick pieces of bacon flavored the way they were. ",
user_id: 7,
business_id: maple.id
)





Review.create!(
rating:5,
body:"I ate, the fried rice with beef. Is amazing, good cooking, good taste and very soft the meet. I recommend this plate. For sure I will back",
user_id: 8,
business_id: noodleTime.id
)

Review.create!(
rating:3,
body:"The food is great, but the service is terrible. They bump their prices to pay their servers well and encourage their guests not to tip and it shows. 

If I'm paying that much for some scrambled eggs and toast, I expect at least sense of hospitality. The staff was cold and hardly welcoming. 

While the food is tasty, the service at Zazie's really takes away from the overall experience.",
user_id: 8,
business_id: zazie.id
)

Review.create!(
rating:1,
body:"I've never had trouble with this place before but the last time I came I found multiple pieces of hair in my foot and the prices are too expensive for the food",
user_id: 8,
business_id: surisan.id
)

Review.create!(
rating:3,
body:"Came here because I was determined to hit a seafood place in SF, despite the fact that my wife doesn't eat seafood (shame).  Fog Harbor is right by Fisherman's wharf and is very nice inside.  It has a good view of the harbor and, depending on where you sit, the seals that park themselves along the docks.  Service was good, albeit a bit slow and very corporate.  Glad I came here for lunch, however I wish their main attraction had been a bit better.",
user_id: 8,
business_id: fog_harbor.id
)

Review.create!(
rating:3,
body:"This place was on my way to my meeting, looked attractive through the windows, so I came back here with a co-worker after the meeting to give this place a try. It was ok, hence the three stars. Had tosticeviche here and another drink don't remember the name. Not impressed at all. Expensive and not much flavor. Girls are nice, but its not enough to make me to come back here again.",
user_id: 8,
business_id: mango_crazy.id
)

Review.create!(
rating:5,
body:"Wayfarer is a fabulous place for a power lunch- this bistro    has an incredible hamburger! We also tried the fried chicken which was different but yummy. Service is spot on. It's very lively with an old school yet sophisticated vibe. Really solid!",
user_id: 8,
business_id: wayfare_tavern.id
)

Review.create!(
rating:4,
body:"I have to say, most people would laugh at me because I hadn't heard of this place when I came into the city.

My friend out of the blue asked me if I wanted to go one evening since her friend could no longer make their reservation. I happily obliged not knowing what I was getting into!

They sat us promptly for our reservation and provided impeccable service and attention throughout the evening despite how busy they were.",
user_id: 8,
business_id: liho.id
)

Review.create!(
rating:5,
body:"My cousin was raving about this place and since we were craving some dim sum, she said we had to try this place out. She wasn't wrong! This was probably one of the best dim sum restaurants I've ever tried in California. ",
user_id: 8,
business_id: dragon.id
)

Review.create!(
rating:3,
body:"They should just not served food and be a straight up day club/ bar. The food seemed like it was good but I mean it's like eating a full meal in the middle of a club. If you are looking for an early party with endless mimosas and dancing. This is the place to be. But if you and your family are looking for a breakfast with mimosas without the party then go somewhere else. A few mislead us into thinking we were getting brunch. I should have known something was up when we waited outside for a table the same exact way you wait to get into a night club. It was fun. I just didn't expect it at all and ended up not even getting food because we were cramped into a tiny space around a table with enough rooms for drinks and that's about it.",
user_id: 8,
business_id: pink.id
)

Review.create!(
rating:5,
body:"This place is rad! Got the Emperor sandwich and it was super tasty. The crispy skin added a ton of flavor. Also got the salt and pepper chips which were sliced and fried perfectly. The prices were decent and the service was really friendly as well. Paper Rooster is a great addition to the neighborhood.",
user_id: 8,
business_id: rooster.id
)

Review.create!(
rating:2,
body:"Came here with my boyfriend for my birthday. I had heard all this major talk about this place. Wow. Totally appalled by what I saw/went through. I was told they couldn't accommodate guests of 1. I saw 3 tables that were seating just 1!!!! I was very upset!!! Don't lie to me about seating arrangements even though I wanted to book 2 months in advance. The food was good...I needed salt for the scallops (never a good sign). The waiters attitudes towards myself and my boyfriend really dampened the mood. Super prissy. Couldn't get anyone to come over to our table for about 7 minutes. I was not a happy camper. Won't go back.",
user_id: 8,
business_id: gary.id
)

Review.create!(
rating:4,
body:"Just plain I'll good ice cream. Be prepared to wait in line. There is always a line here. Through the years they have added more flavors and more after years of not coming here also have ventured into different flavors like one I tried : avacado.",
user_id: 8,
business_id: mitchell.id
)

Review.create!(
rating:4,
body:"Sweet Maple Hmmm,

When it come's down to breakfast and lunch this place definitely have great presentation, The menu itself is huge so sometimes you go in thinking to yourself what do i want to try this time.

Me and my girlfriend stopped in for Brunch at 1:30pm it was not as crowded as i thought it would be... Better for us of course.",
user_id: 8,
business_id: maple.id
)







