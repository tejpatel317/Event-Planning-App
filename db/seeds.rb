# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


puts 'Creating Users...'

User.create!(username: 'tej317', password: 'tej317', first_name: 'tej', last_name: 'patel', email: 'tejpatel317@gmail.com')
User.create!(username: 'test1', password: 'test1', first_name: 'Rob', last_name: 'Hurt', email: 'robhurt@gmail.com')
User.create!(username: 'test2', password: 'test2', first_name: 'Adin', last_name: 'Schwint', email: 'adinschwint@gmail.com')
User.create!(username: 'test3', password: 'test3', first_name: 'Nancy', last_name: 'Williams', email: 'nanywilliams@gmail.com')

puts 'Creating Events...'


Event.create!(user_id: rand(1..User.count), name: "Concert at the Park", location: "Asbury Park, NJ", date: "2022-05-20", time: "19:00:00", image_url: "https://www.centralpark.com/downloads/7867/download/GMA%20Summer%20Concert%20Series.jpeg?cb=3a31e8275bf09d38b960062e4a6b561f")
Event.create!(user_id: rand(1..User.count), name: "Wine Tasting Event", location: "Hoboken, NJ", date: "2022-07-15", time: "17:00:00", image_url: "https://learn.winecoolerdirect.com/wp-content/uploads/2017/02/wine-tasting-event.jpg")
Event.create!(user_id: rand(1..User.count), name: "Food Truck Festival", location: "Trenton, NJ", date: "2022-09-10", time: "12:00:00", image_url: "https://dsu113jcnntrj.cloudfront.net/wp-content/uploads/2019/09/Clifton-2.jpg")
Event.create!(user_id: rand(1..User.count), name: "Beach Volleyball Tournament", location: "Wildwood, NJ", date: "2022-06-25", time: "09:00:00", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Favp.com%2F&psig=AOvVaw1ayajn2nMWnNIUhDMqW4oH&ust=1673570023149000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi2rajkwPwCFQAAAAAdAAAAABAZ")
Event.create!(user_id: rand(1..User.count), name: "Farmers Market", location: "Cape May, NJ", date: "2022-08-13", time: "08:00:00", image_url: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/virginia/HR21030904P_036_77312615-051f-44c8-a306-d9c872aaab61.jpg")
Event.create!(user_id: rand(1..User.count), name: "Art Show", location: "Jersey City, NJ", date: "2022-10-01", time: "19:00:00", image_url: "https://i.ytimg.com/vi/zcA2B41Wym8/maxresdefault.jpg")
Event.create!(user_id: rand(1..User.count), name: "Music Festival", location: "Ocean City, NJ", date: "2022-07-30", time: "12:00:00", image_url: "https://media.vanityfair.com/photos/5e6921443b2c6a0008bf5b20/5:3/w_3000,h_1800,c_limit/FestivalCancellations-2020-GettyImages-174725380.jpg")
Event.create!(user_id: rand(1..User.count), name: "Jazz Night", location: "Princeton, NJ", date: "2022-09-15", time: "20:00:00", image_url: "https://i.ytimg.com/vi/8oZzzEZTX14/maxresdefault.jpg")
Event.create!(user_id: rand(1..User.count), name: "Comedy Show", location: "Atlantic City, NJ", date: "2022-05-10", time: "21:00:00", image_url: "https://www.donttellcomedy.com/static/img/about_us/about2.ed98a7c00e05.webp")
Event.create!(user_id: rand(1..User.count), name: "Book Fair", location: "New Brunswick, NJ", date: "2022-06-05", time: "10:00:00", image_url: "https://liveunitedbr.org/wp-content/uploads/Scholastic-Book-Fair.jpg")
Event.create!(user_id: rand(1..User.count), name: "5K Race", location: "Ridgewood, NJ", date: "2022-07-20", time: "08:00:00", image_url: "https://hips.hearstapps.com/hmg-prod/images/rwh18-sat-hulvat-8999-1540416185.jpg")
Event.create!(user_id: rand(1..User.count), name: "Theatre Performance", location: "Englewood, NJ", date: "2022-08-25", time: "19:00:00", image_url: "https://api.time.com/wp-content/uploads/2019/11/time-best-of-culture-2019-theater-hadestown.jpg")
Event.create!(user_id: rand(1..User.count), name: "Sports Game", location: "Union City, NJ", date: "2022-09-30", time: "19:00:00", image_url: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/05/best-sports-games-fifa-23.jpg")
Event.create!(user_id: rand(1..User.count), name: "Dance Competition", location: "Morristown, NJ", date: "2022-10-15", time: "17:00:00", image_url: "https://www.wcv.com/wp-content/uploads/2019/09/WDC17_01418.jpg")
Event.create!(user_id: rand(1..User.count), name: "Outdoor Movie Night", location: "Summit, NJ", date: "2022-05-30", time: "20:00:00", image_url: "https://i0.wp.com/www.columbusonthecheap.com/lotc-cms/wp-content/uploads/2017/06/movies-outdoors.jpg?fit=2100%2C1350&ssl=1")
Event.create!(user_id: rand(1..User.count), name: "Food and Wine Festival", location: "Edison, NJ", date: "2022-07-10", time: "18:00:00", image_url: "http://blog.touringplans.com/wp-content/uploads/2014/07/FoodWineSmall.jpg")
Event.create!(user_id: rand(1..User.count), name: "Paint Night", location: "Westfield, NJ", date: "2022-06-15", time: "19:00:00", image_url: "https://img.grouponcdn.com/deal/2D659HnpnUaMapykgesU/rA-700x420/v1/c870x524.jpg")

puts 'Creating RSVPs...'

user_event_pairs = []
30.times do
    user_id = rand(1..4)
    event_id = rand(1..17)
    checkin_status = [true, false].sample
    until !user_event_pairs.include? [user_id, event_id]
        user_id = rand(1..4)
        event_id = rand(1..17)
    end
    user_event_pairs << [user_id, event_id]
    Reservation.create!(user_id: user_id, event_id: event_id, checkin_status: checkin_status)
end

puts 'Done Seeding!'