import { Button } from 'react-bootstrap';

export var menubar=["About", "Services", "Blog","Contact"];

export var banner=[
 require('../img/banner1.jpg'),
 require('../img/banner2.jpg'),
 require('../img/banner3.jpg'),
 require('../img/banner4.jpg')
]


export var trip=[
    {img:require('../img/img-1.png'),Text:'Aim for the sky, but move slowly, enjoying every step along the way. ',Text4:'Rafting and whitewater rafting are outdoor entertainment activities that use a boat or an unsinkable raft. It has different difficulty levels according to the current of the water in which the sport is done. It can be done solo but is more commonly done with groups and needs good teamwork to manage the water.',Text2:'RAFTING',Text3:'Details',sellrate:'Solo:  ₹1,500',Mrp:'  ₹1,700',sellrate1:'Family:  ₹2500',Mrp1:'  ₹3000',Button:'RAFTING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img-2.png'), Text:'The world is a book and those who do not travel read only one page.,',Text2:'HIKING',Text3:'Details',sellrate:'Solo:  ₹4,000',Mrp:'  ₹4,500',sellrate1:'Family:  ₹7,000',Mrp1:'  ₹7,500',Text4:'Hiking is an activity of moderate difficulty, which involves walking across long distances generally on trails or paths. The duration of the activity varies between short half-day programs and longer itineraries of over 20 days. It is usually an activity that allows groups of different sizes.' ,Button:'HIKING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img-3.png'), Text:'Remember that happiness is a way of travel, not a destination.',Text2:'CAMPING',Text3:'Details',sellrate:'Solo:  ₹2,999',Mrp:'  ₹3,800',sellrate1:'Family:  ₹3,999',Mrp1:'  ₹4,500',Text4:' Camping is an outdoor activity that involves staying the night/more than one night in a protective shelter out in nature. Camping is a broad term but in its essence, camping is a way of getting away from the hassle of urban life, to a more natural environment for a limited time.', Button:'CAMPING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img4.jpg'),Text:'On a map, every exit is an entry somewhere else.',Text2:'SKYDIVING',Text3:'Details',sellrate:'Solo:  ₹7,000',Mrp:'  ₹10,000',sellrate1:'Family:  ₹11,000',Mrp1:'  ₹14,000',Text4:'The main idea of skydiving is to free-fall until a certain altitude from an aircraft or a mountain, fly about 30 to 180 seconds, and then gradually float in the air until you land on safe ground with a parachute.',Button:'SKYDIVING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img5.jpg'), Text:'See The World Through The Eyes of The Travelers.',Text2:'SURFING',Text3:'Details',sellrate:'Solo:  ₹5,600',Mrp:'  ₹7,000',sellrate1:'Family:  ₹8,000',Mrp1:'  ₹10,000',Text4:'Surfing is the sport of riding waves in an upright or prone position. Surfers catch the ocean, river, or man-made waves and glide across the surface of the water until they break and lose their energy.',Button:'SURFING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img6.jpg'), Text:'If happiness is the goal – and it should be, then adventures should be a top priority.',Text2:'PARAGLIDING',Text3:'Details',sellrate:'Solo:  ₹8,800',Mrp:'  ₹10,00',sellrate1:'Family:  ₹12,500',Mrp1:'  ₹15,000',Text4:'Paragliding is a type of extreme sport found in the early 1980s by people interested in aerial sports, and it allows one to run off the slopes with free parachutes. Paragliding is generally more accessible than other extreme sports since it does not require a special take off or a landing track.',Button:'PARAGLIDING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img7.jpg'), Text:'A good friend listens to your adventures. A best friend takes them with you.',Text2:'MOUNTAIN BIKING',Text3:'Details',sellrate:'Solo:  ₹12,500',Mrp:'  ₹15,000',sellrate1:'Family:  ₹17,000',Mrp1:'  ₹19,000',Text4:'Mountain biking or MTB is an off-road bicycle racing sport that is usually set on rough terrain like mountain, desert, or rocks with specially designed mountain bikes. Professional riders compete on various locations throughout the world while trying to stay on their bikes.',Button:'MOUNTAIN BIKING ',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img8.jpg'), Text:'Travel is the only thing you buy that makes you richer.',Text2:'KAYAKING',Text3:'Details',sellrate:'Solo:  ₹3,000',Mrp:'  ₹3,700',sellrate1:'Family:  ₹7,000',Mrp1:'  ₹8,000',Text4:'Kayaking is a fun activity that involves moving through water in a small water vessel with the aid of a double-bladed paddle. It allows the boat driver to maneuver through waterways by sitting face-forward and propelling ahead with alternating side-to-side paddle strokes.',Button:'KAYAKING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img9.jpg'), Text:'Don’t let fear get in the way of the life you are meant to live.',Text2:'BUNGEE JUMPING' ,Text3:'Details',sellrate:'Solo:  ₹2,500',Mrp:'  ₹2,700',sellrate1:'Family:  ₹3,700',Mrp1:'  ₹4,000',Text4:'Bungee jumping put simply is an exhilarating adventure sport that involves jumping from a high platform – normally from a dam, bridge, crane, or tower, connected to a specially-made thick elastic cord that recoils after a few seconds of freefall. Though the bungee platforms are usually from static structures, it is also possible, and highly thrilling, to bungee jump from hot air balloons, mountain gondolas, and helicopters.',Button:'BUNGEE JUMPING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img10.jpg'), Text:'Once a year, go someplace you’ve never been before.',Text2:'SCUBA DIVING' ,Text3:'Details',sellrate:'Solo:  ₹11,000',Mrp:'  ₹14,000',sellrate1:'Family:  ₹17,000',Mrp1:'  ₹21,000',Text4:' scuba diving is a water sport that involves breathing air from a tank while underwater. Scuba is an acronym for Self Contained Underwater Breathing Apparatus. Most scuba divers are recreational divers who explore underwater environments such as lakes, rivers, quarries, kelp forests and coral reefs.',Button:'SCUBA DIVING',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img11.jpg'), Text:'Travel opens your heart, broadens your mind, and fills your life with stories to tell..',Text2:'ZIP LINE' ,Text3:'Details',sellrate:'Solo:  ₹350',Mrp:'  ₹500',sellrate1:'Family:  ₹700',Mrp1:'  ₹900',Text4:'A zip line is made up of a pulley appended to a stainless-steel cable extended between fixed points of different elevations. Also known as zip wire flying fox and Tyrolean Crossing, it allows a person, fastened to the moving pulley, to zip from the top to the bottom of a cable, propelled by gravity.',Button:'ZIP LINE',Button1:'Wishlist',Button2:'Buy Package'},

    {img:require('../img/img12.jpg'), Text:'At the end of the day your feet should be dirty, your hair messy and your eyes sparkling.',Text2:'ABSEILING',Text3:'Details',sellrate:'Solo:  ₹1,200',Mrp:'  ₹1,500',sellrate1:'Family:  ₹1,700',Mrp1:'  ₹2,000',Text4:'Abseiling (sometimes referred to as rappelling) is an activity in which a person descends a rope in a controlled manner with the use of a friction device or descender.',Button:'ABSEILING',Button1:'Wishlist',Button2:'Buy Package'},
 ]
 
export var content=[
    {img:require('../img/about-img.png'),name:'About us' ,Text:'An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports. Adventures are often undertaken to create psychological arousal or in order to achieve a greater goal, such as the pursuit of knowledge that can only be obtained by such activities.Adventure is essential in life for several reasons. It brings so many positive changes in your own self and your life, letting you see your own life from a new perspective, never experienced before. Today, with such big money involved, it has also become a matter of bread and butter for many families linked with the industry.'}
]

export var info=[
    {img:require('../img/blog1.jpg')},
    
]
