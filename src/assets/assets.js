import logo from './logo.svg';

// Icons
import search_icon from './search_icon.svg';
import remove_icon from './remove_icon.svg';
import arrow_right_icon_colored from './arrow_right_icon_colored.svg';
import star_icon from './star_icon.svg';
import star_dull_icon from './star_dull_icon.svg';
import cart_icon from './cart_icon.svg';
import nav_cart_icon from './nav_cart_icon.svg';
import add_icon from './add_icon.svg';
import refresh_icon from './refresh_icon.svg';
import product_list_icon from './product_list_icon.svg';
import order_icon from './order_icon.svg';
import upload_area from './upload_area.png';
import profile_icon from './profile_icon.png';
import menu_icon from './menu_icon.svg';
import delivery_truck_icon from './delivery_truck_icon.svg';
import leaf_icon from './leaf_icon.svg';
import coin_icon from './coin_icon.svg';
import box_icon from './box_icon.svg';
import trust_icon from './trust_icon.svg';
import black_arrow_icon from './black_arrow_icon.svg';
import white_arrow_icon from './white_arrow_icon.svg';
import main_banner_bg from './main_banner_bg.png';
import main_banner_bg_sm from './main_banner_bg_sm.png';
import bottom_banner_image from './bottom_banner_image.png';
import bottom_banner_image_sm from './bottom_banner_image_sm.png';
import add_address_image from './add_address_image.svg';

// Categories
import organic_vegitable_image from './organic_vegitable_image.png';
import fresh_fruits_image from './fresh_fruits_image.png';
import bottles_image from './bottles_image.png';
import maggi_image from './maggi_image.png';
import dairy_product_image from './dairy_product_image.png';
import bakery_image from './bakery_image.png';
import grain_image from './grain_image.png';

// Products
import potato_image_1 from './potato_image_1.png';
import potato_image_2 from './potato_image_2.png';
import potato_image_3 from './potato_image_3.png';
import potato_image_4 from './potato_image_4.png';
import tomato_image from './tomato_image.png';
import carrot_image from './carrot_image.png';
import apple_image from './apple_image.png';
import amul_milk_image from './amul_milk_image.png';
import coca_cola_image from './coca_cola_image.png';
import brown_bread_image from './brown_bread_image.png';
import basmati_rice_image from './basmati_rice_image.png';
import paneer_image from './paneer_image.png';
import orange_image from './orange_image.png';
import pepsi_image from './pepsi_image.png';
import wheat_flour_image from './wheat_flour_image.png';
import cheese_image from './cheese_image.png';
import eggs_image from './eggs_image.png';
import spinach_image_1 from './spinach_image_1.png';
import onion_image_1 from './onion_image_1.png';
import banana_image_1 from './banana_image_1.png';
import mango_image_1 from './mango_image_1.png';
import grapes_image_1 from './grapes_image_1.png';
import paneer_image_2 from './paneer_image_2.png';
import sprite_image_1 from './sprite_image_1.png';
import fanta_image_1 from './fanta_image_1.png';
import seven_up_image_1 from './seven_up_image_1.png';
import top_ramen_image from './top_ramen_image.png';
import knorr_soup_image from './knorr_soup_image.png';
import yippee_image from './yippee_image.png';
import maggi_oats_image from './maggi_oats_image.png';
import butter_croissant_image from './butter_croissant_image.png';
import chocolate_cake_image from './chocolate_cake_image.png';
import whole_wheat_bread_image from './whole_wheat_bread_image.png';
import vanilla_muffins_image from './vanilla_muffins_image.png';
import quinoa_image from './quinoa_image.png';
import brown_rice_image from './brown_rice_image.png';
import barley_image from './barley_image.png';

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_image,
  box_icon,
};

export const dummyCategories = [
  {
    _id: '00001',
    text: 'Органические овощи',
    path: 'vegetables',
    image: organic_vegitable_image,
    bgColor: '#FEF6DA',
  },
  {
    _id: '00002',
    text: 'Свежие фрукты',
    path: 'fruits',
    image: fresh_fruits_image,
    bgColor: '#FEE0E0',
  },
  {
    _id: '00003',
    text: 'Холодные напитки',
    path: 'drinks',
    image: bottles_image,
    bgColor: '#F0F5DE',
  },
  {
    _id: '00004',
    text: 'Быстрая еда',
    path: 'instant',
    image: maggi_image,
    bgColor: '#E1F5EC',
  },
  {
    _id: '00005',
    text: 'Молочные продукты',
    path: 'dairy',
    image: dairy_product_image,
    bgColor: '#FEE6CD',
  },
  {
    _id: '00006',
    text: 'Выпечка и хлеб',
    path: 'bakery',
    image: bakery_image,
    bgColor: '#E0F6FE',
  },
  {
    _id: '00007',
    text: 'Зерновые и крупы',
    path: 'grains',
    image: grain_image,
    bgColor: '#F1E3F9',
  },
];

export const dummyProducts = [
  // Органические овощи
  {
    _id: 'gd46g23h',
    name: 'Картофель 500 г',
    category: 'vegetables',
    price: 2025,
    offerPrice: 1620,
    image: [potato_image_1, potato_image_2, potato_image_3, potato_image_4],
    description: ['Свежий и органический', 'Богат углеводами', 'Идеален для карри и фритюра'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'gd47g34h',
    name: 'Томат 1 кг',
    category: 'vegetables',
    price: 3240,
    offerPrice: 2835,
    image: [tomato_image],
    description: [
      'Сочный и спелый',
      'Богат витамином C',
      'Отлично подходит для салатов и соусов',
      'Фермерское качество',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'gd48g45h',
    name: 'Морковь 500 г',
    category: 'vegetables',
    price: 2430,
    offerPrice: 2268,
    image: [carrot_image],
    description: ['Сладкая и хрустящая', 'Хороша для зрения', 'Идеальна для соков и салатов'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'gd49g56h',
    name: 'Шпинат 500 г',
    category: 'vegetables',
    price: 1458,
    offerPrice: 1215,
    image: [spinach_image_1],
    description: ['Богат железом', 'Высоко в витаминах', 'Идеален для супов и салатов'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'gd50g67h',
    name: 'Лук 500 г',
    category: 'vegetables',
    price: 1782,
    offerPrice: 1539,
    image: [onion_image_1],
    description: ['Свежий и ароматный', 'Идеален для готовки', 'Кухонная базовая позиция'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },

  // Свежие фрукты
  {
    _id: 'ek51j12k',
    name: 'Яблоко 1 кг',
    category: 'fruits',
    price: 9720,
    offerPrice: 8910,
    image: [apple_image],
    description: [
      'Хрустящее и сочное',
      'Богато клетчаткой',
      'Укрепляет иммунитет',
      'Идеально для закусок и десертов',
      'Органическое и фермерское качество',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek52j23k',
    name: 'Апельсин 1 кг',
    category: 'fruits',
    price: 6480,
    offerPrice: 6075,
    image: [orange_image],
    description: ['Сочный и сладкий', 'Богат витамином C', 'Идеально для соков и салатов'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek53j34k',
    name: 'Банан 1 кг',
    category: 'fruits',
    price: 4050,
    offerPrice: 3645,
    image: [banana_image_1],
    description: ['Сладкий и спелый', 'Высоко в калии', 'Отлично для смузи и перекусов'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek54j45k',
    name: 'Манго 1 кг',
    category: 'fruits',
    price: 12150,
    offerPrice: 11340,
    image: [mango_image_1],
    description: ['Сладкий и ароматный', 'Идеален для смузи и десертов', 'Богат витамином A'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek55j56k',
    name: 'Виноград 500 г',
    category: 'fruits',
    price: 5670,
    offerPrice: 5265,
    image: [grapes_image_1],
    description: [
      'Свежий и сочный',
      'Богат антиоксидантами',
      'Идеален для перекусов и фруктовых салатов',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },

  // Молочные продукты
  {
    _id: 'ek56j67k',
    name: 'Молоко Amul 1 л',
    category: 'dairy',
    price: 4860,
    offerPrice: 4455,
    image: [amul_milk_image],
    description: [
      'Чистое и свежее',
      'Богато кальцием',
      'Идеально для чая, кофе и десертов',
      'Надежное качество бренда',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek57j78k',
    name: 'Панир 200 г',
    category: 'dairy',
    price: 7290,
    offerPrice: 6885,
    image: [paneer_image],
    description: ['Мягкий и свежий', 'Богат белком', 'Идеален для карри и закусок'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek58j89k',
    name: 'Яйца 12 шт',
    category: 'dairy',
    price: 7290,
    offerPrice: 6885,
    image: [eggs_image],
    description: ['Фермерские свежие', 'Богаты белком', 'Идеальны для завтрака и выпечки'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek59j90k',
    name: 'Панир 200 г (вариант 2)',
    category: 'dairy',
    price: 7290,
    offerPrice: 6885,
    image: [paneer_image_2],
    description: ['Мягкий и свежий', 'Богат белком', 'Идеален для карри и закусок'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek60j01k',
    name: 'Сыр 200 г',
    category: 'dairy',
    price: 11340,
    offerPrice: 10530,
    image: [cheese_image],
    description: ['Кремовый и вкусный', 'Идеален для пиццы и сэндвичей', 'Богат кальцием'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },

  // Холодные напитки
  {
    _id: 'ek61j12k',
    name: 'Coca-Cola 1.5 л',
    category: 'drinks',
    price: 6456,
    offerPrice: 6052,
    image: [coca_cola_image],
    description: [
      'Освежающая и газированная',
      'Идеальна для вечеринок и встреч',
      'Лучше подавать охлаждённой',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek62j23k',
    name: 'Pepsi 1.5 л',
    category: 'drinks',
    price: 6295,
    offerPrice: 5891,
    image: [pepsi_image],
    description: ['Охлаждённая и освежающая', 'Отлична для праздников', 'Лучше подавать холодной'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek63j34k',
    name: 'Sprite 1.5 л',
    category: 'drinks',
    price: 6375,
    offerPrice: 5972,
    image: [sprite_image_1],
    description: [
      'Освежающий цитрусовый вкус',
      'Идеален для жарких дней',
      'Лучше подавать охлаждённым',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek64j45k',
    name: 'Fanta 1.5 л',
    category: 'drinks',
    price: 6214,
    offerPrice: 5810,
    image: [fanta_image_1],
    description: [
      'Сладкая и газированная',
      'Отлична для вечеринок и встреч',
      'Лучше подавать холодной',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek65j56k',
    name: '7 Up 1.5 л',
    category: 'drinks',
    price: 6133,
    offerPrice: 5730,
    image: [seven_up_image_1],
    description: [
      'Освежающий лимон-лайм вкус',
      'Идеален для освежения',
      'Лучше подавать охлаждённым',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },

  // Зерновые и крупы
  {
    _id: 'ek66j67k',
    name: 'Рис Басмати 5 кг',
    category: 'grains',
    price: 44385,
    offerPrice: 41964,
    image: [basmati_rice_image],
    description: ['Длиннозерный и ароматный', 'Идеален для бирьяни и пилау', 'Премиум качество'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek67j78k',
    name: 'Пшеничная мука 5 кг',
    category: 'grains',
    price: 20175,
    offerPrice: 18561,
    image: [wheat_flour_image],
    description: [
      'Высококачественная цельная пшеница',
      'Мягкие и пышные роти',
      'Богата питательными веществами',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek68j89k',
    name: 'Органическая киноа 500 г',
    category: 'grains',
    price: 36315,
    offerPrice: 33894,
    image: [quinoa_image],
    description: [
      'Высокое содержание белка и клетчатки',
      'Без глютена',
      'Богата витаминами и минералами',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek69j90k',
    name: 'Коричневый рис 1 кг',
    category: 'grains',
    price: 9684,
    offerPrice: 8877,
    image: [brown_rice_image],
    description: [
      'Цельнозерновой и питательный',
      'Помогает в снижении веса',
      'Хороший источник магния',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'ek70j01k',
    name: 'Ячмень 1 кг',
    category: 'grains',
    price: 12105,
    offerPrice: 11298,
    image: [barley_image],
    description: [
      'Богат клетчаткой',
      'Помогает улучшить пищеварение',
      'Низкий в жирах и холестерине',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },

  // Выпечка и хлеб
  {
    _id: 'bk01a24z',
    name: 'Коричневый хлеб 400 г',
    category: 'bakery',
    price: 3228,
    offerPrice: 2824,
    image: [brown_bread_image],
    description: ['Мягкий и полезный', 'Из цельной пшеницы', 'Идеален для завтрака и сэндвичей'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'bk02b30y',
    name: 'Круассан с маслом 100 г',
    category: 'bakery',
    price: 4035,
    offerPrice: 3632,
    image: [butter_croissant_image],
    description: ['Слоистый и масляный', 'Свежая выпечка', 'Идеален для завтрака или перекуса'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'bk03c31x',
    name: 'Шоколадный торт 500 г',
    category: 'bakery',
    price: 28245,
    offerPrice: 26228,
    image: [chocolate_cake_image],
    description: [
      'Богатый и влажный',
      'Сделан из премиального какао',
      'Идеален для праздников и вечеринок',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'bk04d32w',
    name: 'Цельнозерновой хлеб 400 г',
    category: 'bakery',
    price: 3632,
    offerPrice: 3228,
    image: [whole_wheat_bread_image],
    description: [
      'Полезный и питательный',
      'Из муки из цельной пшеницы',
      'Идеален для сэндвичей и тостов',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'bk05e33v',
    name: 'Ванильные маффины 6 шт',
    category: 'bakery',
    price: 8070,
    offerPrice: 7263,
    image: [vanilla_muffins_image],
    description: [
      'Мягкие и воздушные',
      'Идеальны для быстрого перекуса',
      'Сделаны с настоящей ванилью',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },

  // Быстрая еда
  {
    _id: 'in01f25u',
    name: 'Лапша Maggi 280 г',
    category: 'instant',
    price: 4438,
    offerPrice: 4035,
    image: [maggi_image],
    description: [
      'Мгновенная и лёгкая в приготовлении',
      'Вкусная на вкус',
      'Популярна среди детей и взрослых',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'in02g26t',
    name: 'Лапша Top Ramen 270 г',
    category: 'instant',
    price: 3632,
    offerPrice: 3228,
    image: [top_ramen_image],
    description: [
      'Быстрая и лёгкая к приготовлению',
      'Острая и ароматная',
      'Любима студентами и семьями',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'in03h27s',
    name: 'Суп-чашка Knorr 70 г',
    category: 'instant',
    price: 2824,
    offerPrice: 2421,
    image: [knorr_soup_image],
    description: ['Удобно для перекуса вне дома', 'Здоровый и питательный', 'Разнообразие вкусов'],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'in04i28r',
    name: 'Лапша Yippee 260 г',
    category: 'instant',
    price: 4035,
    offerPrice: 3632,
    image: [yippee_image],
    description: [
      'Невалённая лапша для более здорового выбора',
      'Вкусная и сытная',
      'Удобна для загруженного графика',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
  {
    _id: 'in05j29q',
    name: 'Лапша из овса 72 г',
    category: 'instant',
    price: 3228,
    offerPrice: 2824,
    image: [maggi_oats_image],
    description: [
      'Здоровая альтернатива с овсом',
      'Хороша для пищеварения',
      'Идеальна для завтрака или перекуса',
    ],
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: '67b5b9e54ea97f71bbc196a0',
    userId: '67b5880e4d09769c5ca61644',
    firstName: 'Shozruxmirzo',
    lastName: '',
    email: 'mrshon4554@gmail.com',
    street: 'Mustaqillikning 21-yilligi',
    city: 'Andijan',
    state: 'Andijan',
    zipcode: 123456,
    country: 'UZ',
    phone: '99897 584 44 44',
  },
];

export const dummyCart = {
  [dummyProducts[3]._id]: 1,
  [dummyProducts[5]._id]: 2,
};

export const dummyOrders = [
  {
    _id: '67e2589a8f87e63366786400',
    userId: '67b5880e4d09769c5ca61644',
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: '67e2589a8f87e63366786401',
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: 'Order Placed',
    paymentType: 'Online',
    isPaid: true,
    createdAt: '2025-03-25T07:17:46.018Z',
    updatedAt: '2025-03-25T07:18:13.103Z',
  },
  {
    _id: '67e258798f87e633667863f2',
    userId: '67b5880e4d09769c5ca61644',
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: '67e258798f87e633667863f3',
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: '67e258798f87e633667863f4',
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: 'Order Placed',
    paymentType: 'COD',
    isPaid: false,
    createdAt: '2025-03-25T07:17:13.068Z',
    updatedAt: '2025-03-25T07:17:13.068Z',
  },
];

export const dummyFavorites = [dummyProducts[2]._id, dummyProducts[4]._id];
