const date=new Date();
let currentDate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
const thali_datas = [
    {
      index: 0,
      name: 'The Gardenia Bakers I ',
      tag: "North Indian, Fast Food",
      location: "382/204,saidulajab, near panchayat ghr, NewDelhi-30",
      img: require('./components/images/ic2.jpg'),
      star: 4.2,
      time: "9:00p.m. to 11:00p.m.",
      dis: "12km",
      date: currentDate,
      money: 99,
      money_cut: 225,
      closes: 30
    },
    {
      index: 1,
      name: 'The Gardenia Bakers II ',
      tag: "North Indian, Fast Food",
      location: "382/204,saidulajab, near panchayat ghr, NewDelhi-30",
      img: require('./components/images/ic2.jpg'),
      star: 4.2,
      time: "9:00p.m. to 11:00p.m.",
      dis: "12km",
      date: currentDate,
      money: 79,
      money_cut: 190,
      closes: 30
    },
    {
      index: 2,
      name: 'The Gardenia Bakers I ',
      tag: "North Indian, Fast Food",
      location: "382/204,saidulajab, near panchayat ghr, NewDelhi-30",
      img: require('./components/images/ic2.jpg'),
      star: 4.2,
      time: "9:00p.m. to 11:00p.m.",
      dis: "12km",
      date: currentDate,
      money: 99,
      money_cut: 225,
      closes: 30
    },
    {
      index: 3,
      name: 'The Gardenia Bakers II ',
      tag: "North Indian, Fast Food",
      location: "382/204,saidulajab, near panchayat ghr, NewDelhi-30",
      img: require('./components/images/ic2.jpg'),
      star: 4.2,
      time: "9:00p.m. to 11:00p.m.",
      dis: "12km",
      date: currentDate,
      money: 79,
      money_cut: 190,
      closes: 30
    },
    // {
    //   index: 4,
    //   name: 'Kanha Thali',
    //   tag: "North Indian, Fast Food",
    //   location: "Malaviya Nagar, Jaipur",
    //   img: require('./components/images/3.jpg'),
    //   star: 4.2,
    //   time: "9:00p.m.",
    //   dis: "13km",
    //   date: "12/04/23",
    //   money: 150,
    //   money_cut: 300,
    //   closes: 30
    // },
    // {
    //   index: 5,
    //   name: 'Kanha Thali',
    //   tag: "North Indian, Fast Food",
    //   location: "Malaviya Nagar, Jaipur",
    //   img: require('./components/images/3.jpg'),
    //   star: 4.2,
    //   time: "9:00p.m.",
    //   dis: "13km",
    //   date: "12/04/23",
    //   money: 150,
    //   money_cut: 300,
    //   closes: 30
    // },
    // {
    //   index: 6,
    //   name: 'Kanha Thali',
    //   tag: "North Indian, Fast Food",
    //   location: "Malaviya Nagar, Jaipur",
    //   img: require('./components/images/3.jpg'),
    //   star: 4.2,
    //   time: "9:00p.m.",
    //   dis: "13km",
    //   date: "12/04/23",
    //   money: 150,
    //   money_cut: 300,
    //   closes: 30
    // },
    // {
    //   index: 7,
    //   name: 'Kanha Thali',
    //   tag: "North Indian, Fast Food",
    //   location: "Malaviya Nagar, Jaipur",
    //   img: require('./components/images/3.jpg'),
    //   star: 4.2,
    //   time: "9:00p.m.",
    //   dis: "13km",
    //   date: "12/04/23",
    //   money: 150,
    //   money_cut: 300,
    //   closes: 30
    // },
    // {
    //   name: 'Margherita Pizza',
    //   desc:"Tomato Sauce, mix cheese",
    //   img: require('./components/images/Platform Crafter Menu/Pizza Fatayer.webp'),
    // },
    // {
    //   name: 'Pepperoni Pizza',
    //   desc:"Tomato sauce , peperoni & Mozarella cheese",
    //   img: require('./components/images/Platform Crafter Menu/pumpkin hummus.jpg'),
    // },
    // {
    //   name: 'Mexican Burrito Plate- Chicken ',
    //   desc:"Tortilla Bread filled with Chicken and mix bell pepper and Cheddar cheese ",
    //   img: require('./components/images/Platform Crafter Menu/Mix Tart.webp'),
    // },
    // {
    //   name: 'Mexican Burrito Plate- Shrimps ',
    //   desc:"Tortilla Bread filled with Shrimps and mix bell pepper and Cheddar cheese",
    //   img: require('./components/images/Platform Crafter Menu/breaded shrimp caesar salad.jpg'),
    // },
    // {
    //   name: 'Mexican Burrito Plate- Beef ',
    //   desc:"Tortilla Bread filled with beef and mix bell pepper and Cheddar cheese ",
    //   img: require('./components/images/Platform Crafter Menu/Crafter Breakfast Tray.webp'),
    // },
    // {
    //   name: 'Vegetable Pasta with Breaded chicken',
    //   desc:"Breaded Chicken & Pasta mixed with Vegetables ",
    //   img: require('./components/images/Platform Crafter Menu/vegetable pasta with breaded chicken.jpg'),
    // },
    // {
    //   name: 'Tagliatte mushroom pasta ',
    //   desc:"Tagliatelle Pasta Served with Classic Creamy Mushroom Chicken Sauce",
    //   img: require('./components/images/Platform Crafter Menu/Tagliatelle mushroom pasta.jpg'),
    // },
    // {
    //   name: 'Penne pasta arabiatta',
    //   desc:"Penne Pasta served with Red Sause and Parmesan Cheese ",
    //   img: require('./components/images/Platform Crafter Menu/penne pasta arabiata.jpg'),
    // },
    // {
    //   name: 'Steak with sweet and sour potato',
    //   desc:"Beef Steak with Mashed potatos & grilled vegetables served with Demi-glass Sauce",
    //   img: require('./components/images/Platform Crafter Menu/steak with sweet and sour potatoe.jpg'),
    // },
    // {
    //   name: 'jambalaya pasta ',
    //   desc:"Penne pasta served with pink sauce and Grilled chicken and vegetables",
    //   img: require('./components/images/Platform Crafter Menu/jambalaya pasta.jpg'),
    // },
    // {
    //   name: 'Chinese chicken with sticky rice ',
    //   desc:"Fried chicken with rice & soya sauce",
    //   img: require('./components/images/Platform Crafter Menu/Granola Profiterole.webp'),
    // }
    // {
    //   name: 'Chicken Biryani',
    //   desc:"Grilled chicken & rice with Indian spices served with Raita Sauce ",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Crafter Chicken Burger',
    //   desc:"Chicken burger with fresh bread and fries",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Crafter Beef Burger',
    //   desc:"Beef burger with fresh bread and fries",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Turkey and cheese',
    //   desc:"Turkey slices with cheddar cheese served in focaccia bread",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Three cheese',
    //   desc:"Mozarella, white cheddar and yellow cheddar cheese served with black olive pest",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Falafel ',
    //   desc:"Fried Falafel & vegetables served in brioche breade",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Eggplant & Halloumi',
    //   desc:"Egg plant & Halloumiin brioche bread served with Mollases sauce",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Egg Avocado',
    //   desc:"Boiled Eggs with vegetables & cream cheese served in brioche bread",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Chicken Wrap Shawerma',
    //   desc:"Chicken breast with Vegetables served in Tortilla bread",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Chicken Caesar wrap',
    //   desc:"Chicken & Caesar sauce served in Tortilla Bread",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Vine Leaves',
    //   desc:"Vine Leaves Filled with our special rice mixture ",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Pumpkin Hummus',
    //   desc:"Pumpkin Hummus served with crispy arabic bread",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Mango Potato Samosa',
    //   desc:"Potato & Mango served with chutney mint sauce",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Summer Mix Berries ',
    //   desc:"Mix berries and lettuce Mixed with Mozzarella cheese ",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'Shrimp Caesar Salad ',
    //   desc:"Romain lettuce with Breaded shrimp & served with special crispy bread ",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // },
    // {
    //   name: 'diner double',
    //   desc:"Profiterole filled with white chocolatre & pistachio Paste",
    //   img: require('./components/images/item-6.jpeg'),
    // }
  ];
  export default thali_datas;