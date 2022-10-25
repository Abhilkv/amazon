import Immutable from 'seamless-immutable';
import {
  HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL,
  HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST,
  HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS,
  HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL,
  HOMEPAGE_PRODUCTS_DATA_SEARCH,
  HOMEPAGE_PRODUCTS_DATA_FILTER,
  HOMEPAGE_PRODUCTS_DATA_FILTER_PRICE,
  HOMEPAGE_PRODUCTS_DATA_FILTER_RATING,
  HOMEPAGE_PRODUCTS_DATA_FILTER_GENDER
} from '../../../actions';

const defaultState = Immutable.flatMap({
  actualData: [],
  productsData: [],
  categories: [],
  loading: false,
  searchKey: '',
  category: '',
  gender: ''
});

const filterData = (data, category, searchKey) => {
  if (category && searchKey) {
    return data.filter((item) => ((item.category).toLowerCase() === (category).toLowerCase() && ((item.name).toLowerCase()).includes((searchKey).toLowerCase())));
  } if (category) {
    return data.filter((item) => ((item.category).toLowerCase() === (category).toLowerCase()));
  } if (searchKey) {
    return data.filter((item) => (((item.name).toLowerCase()).includes((searchKey).toLowerCase())));
  }
  return data;
};

const addRatingAndGender = (data) => {
  const getGender = (number) => {
    switch (number) {
      case 0:
        return 'Female';
      case 1:
        return 'Male';
      case 2:
        return 'Others';
      default:
        return 'Kids';
    }
  };
  const updatedData = data.map((item) => ({ ...item, rating: Math.floor(Math.random() * 100) % 6, gender: getGender(Math.floor(Math.random() * 100) % 4) }));
  console.log(updatedData);
  return updatedData;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { loading: true, productsData: [] });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { loading: false, actualData: action.data, productsData: filterData((action.data), state.category, state.searchKey) });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL:
      return Immutable.merge(state, { loading: false, productsData: [] });


    case HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { loading: true, categories: [] });

    case HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { loading: false, categories: action.data && action.data });

    case HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL:
      return Immutable.merge(state, { loading: false, categories: [] });

    case HOMEPAGE_PRODUCTS_DATA_SEARCH:
      return Immutable.merge(state, { searchKey: action.key, gender: state.gender, category: action.category, productsData: filterData(state.actualData, state.category, action.key) });

    case HOMEPAGE_PRODUCTS_DATA_FILTER:
      return Immutable.merge(state, { searchKey: '',
        gender: state.gender,
        category: action.category
      //  productsData: filterData(state.actualData, action.category, '')
      });

    case HOMEPAGE_PRODUCTS_DATA_FILTER_PRICE:
      return Immutable.merge(state, { searchKey: '', gender: state.gender, category: state.category, productsData: state.actualData.filter((product) => (Number(product.price) >= action.priceRange[0] && Number(product.price) <= action.priceRange[1])) });

    case HOMEPAGE_PRODUCTS_DATA_FILTER_RATING:
      return Immutable.merge(state, { searchKey: '', gender: state.gender, category: state.category, productsData: state.actualData.filter((product) => (Number(product.rating + 1) >= (action.rating))) });

    case HOMEPAGE_PRODUCTS_DATA_FILTER_GENDER:
      return Immutable.merge(state, { searchKey: '',
        gender: action.gender,
        category: state.category
        //  productsData: state.actualData.filter((product) => (product.gender === (action.gender)))
      });

    default:
      return state;
  }
};


const categoriesData = [
  {
    _id: '62e638f41126b53e1c7deb61',
    name: 'Electronics',
    createdAt: '2022-07-31T08:10:28.145Z',
    updatedAt: '2022-07-31T08:10:28.145Z',
    __v: 0
  },
  {
    _id: '62e638fd1126b53e1c7deb65',
    name: 'Clothing',
    createdAt: '2022-07-31T08:10:37.186Z',
    updatedAt: '2022-07-31T08:10:37.186Z',
    __v: 0
  },
  {
    _id: '62e6390e1126b53e1c7deb69',
    name: 'Accessories',
    createdAt: '2022-07-31T08:10:54.540Z',
    updatedAt: '2022-07-31T08:10:54.540Z',
    __v: 0
  },
  {
    _id: '62e6391f1126b53e1c7deb6d',
    name: 'Furniture',
    createdAt: '2022-07-31T08:11:11.918Z',
    updatedAt: '2022-07-31T08:11:11.918Z',
    __v: 0
  },
  {
    _id: '62e6397e1126b53e1c7deb72',
    name: 'Hobby',
    createdAt: '2022-07-31T08:12:46.096Z',
    updatedAt: '2022-07-31T08:12:46.096Z',
    __v: 0
  }
];

const productData = [
  {
    _id: '634345b970ddee7ede525312',
    name: 'Iphone 14',
    avatar: 'https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Max-Deep-Purple-rightimage',
    description: 'New',
    price: 1200,
    category: 'Electronics',
    developerEmail: 'alperceltr@gmail.com',
    createdAt: '2022-10-09T22:05:45.709Z',
    updatedAt: '2022-10-09T22:05:45.709Z',
    __v: 0
  },
  {
    _id: '6343c32ebe902eae7b10fe28',
    name: 'Xbox Series S',
    avatar: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/109337-anagorsel_large.jpg',
    description: 'Microsoft Türkiye Garantilidir.Garanti sürecine başlamadan önce, lütfen support.microsoft.com adresinde yer alan sorun giderme ipuçlarını kullanın.Sorun giderme ipuçları sorununuzu çözmezse, support.microsoft.com/devices adresindeki çevrimiçi süreci izleyin. Internet erişiminiz yoksa, 0850 390 27 77’i arayın.',
    price: 500,
    category: 'Electronics',
    developerEmail: 'muratcan.ysfgl@gmail.com',
    createdAt: '2022-10-10T07:01:02.979Z',
    updatedAt: '2022-10-10T07:01:02.979Z',
    __v: 0
  },
  {
    _id: '63441983be902eae7b114a34',
    name: 'HEALGEN Gaming Chair',
    avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71GFKzCMyCL._AC_SL1500_.jpg',
    description: 'HEALGEN Gaming Chair with Footrest Gamer Chair with Massage Lumbar Support PU Leather Computer Chair Ergonomic Chair Video Game Chairs Gaming Chair for Adults',
    price: 145,
    category: 'Electronics',
    developerEmail: 'mustafayavas40@gmail.com',
    createdAt: '2022-10-10T13:09:23.140Z',
    updatedAt: '2022-10-10T13:09:23.140Z',
    __v: 0
  },
  {
    _id: '63441aadbe902eae7b114ace',
    name: 'Wolverine Men\'s Boot',
    avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/517hD2Bz47L._AC_UY625_.jpg',
    description: 'Wolverine Men\'s Floorhand Waterproof 6" Steel Toe Work Boot',
    price: 61,
    category: 'Clothing',
    developerEmail: 'mustafayavas40@gmail.com',
    createdAt: '2022-10-10T13:14:21.520Z',
    updatedAt: '2022-10-10T13:14:21.520Z',
    __v: 0
  },
  {
    _id: '63453cf5660580d601730233',
    name: 'Iphone 14',
    avatar: 'https://www.donanimhaber.com/images/images/haber/146437/src/iphone-14-pro-nun-yuksek-kaliteli-render-goruntuleri-yayinlandi146437_11.jpg',
    description: 'Iphone 14',
    price: 1130,
    category: 'Electronics',
    developerEmail: 'me.alperen@gmail.com',
    createdAt: '2022-10-11T09:52:53.629Z',
    updatedAt: '2022-10-11T09:52:53.629Z',
    __v: 0
  },
  {
    _id: '63456778660580d601730e59',
    name: 'Sunglasses',
    avatar: 'https://hips.hearstapps.com/hmg-prod/images/24-1640208679.jpg?crop=0.553xw:1.00xh;0.224xw,0&resize=180:*',
    description: 'Mens Accessories Sunglasses ',
    price: 1000,
    category: 'Accessories',
    developerEmail: 'cumhurcangs97@gmail.com',
    createdAt: '2022-10-11T12:54:16.926Z',
    updatedAt: '2022-10-11T12:54:16.926Z',
    __v: 0
  },
  {
    _id: '6346a611b2b43f7e034dfc50',
    name: 'Notebook',
    avatar: 'https://productimages.hepsiburada.net/s/257/222-222/110000240404389.jpg/format:webp',
    description: 'This is the best laptop',
    price: 7500,
    category: 'Electronics',
    developerEmail: 'mucahittasan0@gmail.com',
    createdAt: '2022-10-12T11:33:37.229Z',
    updatedAt: '2022-10-12T11:33:37.229Z',
    __v: 0
  },
  {
    _id: '6346b2fbb2b43f7e034e033a',
    name: 'Instant Vortex Pro Air Fryer',
    avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81oSbQ6TqkL._AC_SY450_.jpg',
    description: 'EvenCrisp TECHNOLOGY: Advanced technology that drives air flow top down for a perfect golden finish and crispy, tender results every time!',
    price: 109,
    category: 'Electronics',
    developerEmail: 'b.serkankara@gmail.com',
    createdAt: '2022-10-12T12:28:43.223Z',
    updatedAt: '2022-10-12T12:28:43.223Z',
    __v: 0
  },
  {
    _id: '6346b435b2b43f7e034e03b3',
    name: 'Corsair CV Series, CV650, 650 Watt, Dual EPS, 80 PLUS Bronze Certified, Non Modular Power Supply (Low Noise, Compact Casing, Black Sleeving and Casing) NA Version - Black',
    avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71wEPb+eKOL._AC_SY355_.jpg',
    description: '80 PLUS Bronze certified efficiency provides up to 88% operational efficiency, generating less heat and lowering your energy costs.',
    price: 39,
    category: 'Electronics',
    developerEmail: 'b.serkankara@gmail.com',
    createdAt: '2022-10-12T12:33:57.190Z',
    updatedAt: '2022-10-12T12:33:57.190Z',
    __v: 0
  },
  {
    _id: '634711eab2b43f7e034e2247',
    name: 'Air Pods',
    avatar: 'https://productimages.hepsiburada.net/s/89/550/110000031510507.jpg/format:webp',
    description: 'Air Pods Pro',
    price: 500,
    category: 'Electronics',
    developerEmail: 'me.alperen@gmail.com',
    createdAt: '2022-10-12T19:13:46.607Z',
    updatedAt: '2022-10-12T19:13:46.607Z',
    __v: 0
  },
  {
    _id: '63471325b2b43f7e034e22ad',
    name: 'Macbook Pro M1',
    avatar: 'https://productimages.hepsiburada.net/s/131/550/110000081537709.jpg/format:webp',
    description: 'Macbook Pro M1 16GB 512GB SSD macOS 14"',
    price: 1500,
    category: 'Electronics',
    developerEmail: 'me.alperen@gmail.com',
    createdAt: '2022-10-12T19:19:01.438Z',
    updatedAt: '2022-10-12T19:19:01.438Z',
    __v: 0
  },
  {
    _id: '634732b5b2b43f7e034e755b',
    name: 'Duracell Basic Kalem Pil 10\'lu Aa',
    avatar: 'https://productimages.hepsiburada.net/s/40/550/10659781869618.jpg/format:webp',
    description: ' Duracell Alkalin AA Kalem Piller, 10’lu paket',
    price: 99.9,
    category: 'Electronics',
    developerEmail: 'ayseguler.92@gmail.com',
    createdAt: '2022-10-12T21:33:41.266Z',
    updatedAt: '2022-10-12T21:33:41.266Z',
    __v: 0
  },
  {
    _id: '634745b2b2b43f7e034ecc20',
    name: 'HUAWEI Mate Xs 2',
    avatar: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/mate-xs2/white-list.png',
    description: 'Mobile Phone',
    price: 5000,
    category: 'Electronics',
    developerEmail: 'ozbey97ahmet@gmail.com',
    createdAt: '2022-10-12T22:54:42.649Z',
    updatedAt: '2022-10-12T22:54:42.649Z',
    __v: 0
  },
  {
    _id: '634749b3b2b43f7e034ee514',
    name: 'Beats Studio3 ',
    avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXJA2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420177108',
    description: 'Wireless ',
    price: 259,
    category: 'Electronics',
    developerEmail: 'ozbey97ahmet@gmail.com',
    createdAt: '2022-10-12T23:11:47.766Z',
    updatedAt: '2022-10-12T23:11:47.766Z',
    __v: 0
  },
  {
    _id: '63474b65b2b43f7e034eeaef',
    name: 'Beats Red',
    avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX412?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420170758',
    description: 'Wireless',
    price: 599,
    category: 'Electronics',
    developerEmail: 'ozbey97ahmet@gmail.com',
    createdAt: '2022-10-12T23:19:01.088Z',
    updatedAt: '2022-10-12T23:19:01.088Z',
    __v: 0
  },
  {
    _id: '63474cbbb2b43f7e034ef3aa',
    name: 'Beats Blue',
    avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX402?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420165023',
    description: 'Wireless ',
    price: 699,
    category: 'Electronics',
    developerEmail: 'ozbey97ahmet@gmail.com',
    createdAt: '2022-10-12T23:24:43.684Z',
    updatedAt: '2022-10-12T23:24:43.684Z',
    __v: 0
  },
  {
    _id: '6347e39a258e2b0b3d5c9518',
    name: 'Wireless Gamepad ',
    avatar: 'https://m.media-amazon.com/images/I/51Prg4Smx-L._SX522_.jpg',
    description: 'The EvoFox Elite Ops Wireless Gamepad with Type C Charging is the ideal Android TV Gamepad. With all Android TVs supporting at least basic Gaming, a Gamepad at home is a must. Use the provided USB Extender Cable on your TV to ensure optimal wireless performance.\nThis Wireless Controller also supports Windows with X input and D input modes, and PS3s. It automatically detects and changes the gamepad mode based on your system. Simply Plug and Play!\nThe Elite Ops features Digital Triggers (not Analog), Accurate 360 degree concave thumbsticks, a Precise 8 way floating D-Pad. The gamepad also features dual rumble Vibration motors (for PC and PS3 only) and an easy to use Turbo Mode.\nThe gamepad comes with a Type C charging port and the 400mAh Rechargeable battery ensures 8 hours of non stop gameplay. The ergonomic and robust design with anti-sweat matte finish makes it easy on your hands, but tough on your enemies.\nHassle Free 1 Year Manufacturing Warranty | Please Call or Email our customer support for any assistance.',
    price: 300,
    category: 'Electronics',
    developerEmail: 'abhilRam@gmail.com',
    createdAt: '2022-10-13T10:08:26.574Z',
    updatedAt: '2022-10-13T10:08:26.574Z',
    __v: 0
  },
  {
    _id: '6347e3e0258e2b0b3d5c9532',
    name: 'Men\'s Unhemmed Taclite Pro Pant',
    avatar: 'https://m.media-amazon.com/images/I/71Svvls74cL._SX522_.jpg',
    description: 'Good quality and Suitable to use.\nThis Product comes in a proper Packaging.\nIn case of any query or issue. Feel free to reach out to us.\nContains: Pack of 1.',
    price: 5000,
    category: 'Clothing',
    developerEmail: 'abhilRam@gmail.com',
    createdAt: '2022-10-13T10:09:36.601Z',
    updatedAt: '2022-10-13T10:09:36.601Z',
    __v: 0
  },
  {
    _id: '634805fd258e2b0b3d5cb8f5',
    name: 'Smart Watch',
    avatar: 'https://productimages.hepsiburada.net/s/140/550/110000093110650.jpg/format:webp',
    description: 'Apple Smart Watch SE',
    price: 500,
    category: 'Electronics',
    developerEmail: 'me.alperen@gmail.com',
    createdAt: '2022-10-13T12:35:09.449Z',
    updatedAt: '2022-10-13T12:35:09.449Z',
    __v: 0
  },
  {
    _id: '634807e1258e2b0b3d5cb92b',
    name: 'Tshirt',
    avatar: 'https://productimages.hepsiburada.net/s/232/600-800/110000214813657.jpg',
    description: 'Pink Tshirt',
    price: 150,
    category: 'Clothing',
    developerEmail: 'me.alperen@gmail.com',
    createdAt: '2022-10-13T12:43:13.960Z',
    updatedAt: '2022-10-13T12:43:13.960Z',
    __v: 0
  },
  {
    _id: '63481e8bf560b83dfb4b14c6',
    name: 'Xiaomi Redmi Note 11 Pro',
    avatar: 'https://productimages.hepsiburada.net/s/212/550/110000189356238.jpg/format:webp',
    description: 'A new generation smart phone!',
    price: 8999,
    category: 'Electronics',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:19:55.594Z',
    updatedAt: '2022-10-13T14:19:55.594Z',
    __v: 0
  },
  {
    _id: '63481ee9f560b83dfb4b14d4',
    name: 'MSI KATANA GF76',
    avatar: 'https://productimages.hepsiburada.net/s/237/550/110000220008737.jpg/format:webp',
    description: 'A nice laptop.',
    price: 29.279,
    category: 'Electronics',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:21:29.525Z',
    updatedAt: '2022-10-13T14:21:29.525Z',
    __v: 0
  },
  {
    _id: '634821b6f560b83dfb4b14e4',
    name: 'Samsung MS23F300EEK',
    avatar: 'https://productimages.hepsiburada.net/s/31/550/10337753661490.jpg/format:webp',
    description: 'IzgaraYokDerinlik (cm)37.4Yükseklik (cm)27.5Fırın Hacmi23Güç (W)800',
    price: 1.499,
    category: 'Electronics',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:33:26.012Z',
    updatedAt: '2022-10-13T14:33:26.012Z',
    __v: 0
  },
  {
    _id: '63482217f560b83dfb4b14f2',
    name: 'Avva Erkek Siyah Oxford Düğmeli Yaka Regular Fit Gömlek',
    avatar: 'https://productimages.hepsiburada.net/s/207/1000/110000183582435.jpg',
    description: 'A great shirt.',
    price: 249,
    category: 'Clothing',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:35:03.983Z',
    updatedAt: '2022-10-13T14:35:03.983Z',
    __v: 0
  },
  {
    _id: '634822b1f560b83dfb4b1502',
    name: 'Pafu Sando Tekli Katlanır Yataklı Koltuk - Gri',
    avatar: 'https://productimages.hepsiburada.net/s/136/550/110000087853868.jpg/format:webp',
    description: 'A highly comfortable sofa.',
    price: 2.599,
    category: 'Furniture',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:37:37.203Z',
    updatedAt: '2022-10-13T14:37:37.203Z',
    __v: 0
  },
  {
    _id: '63482334f560b83dfb4b150c',
    name: 'Altus Alk 471 x 514 Lt No Frost Buzdolabı',
    avatar: 'https://productimages.hepsiburada.net/s/205/550/110000180897507.jpg/format:webp',
    description: 'A cool fridge.',
    price: 10.499,
    category: 'Electronics',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:39:48.282Z',
    updatedAt: '2022-10-13T14:39:48.282Z',
    __v: 0
  },
  {
    _id: '6348240ef560b83dfb4b151a',
    name: 'Xiaomi Mi Vacuum Cleaner Mini',
    avatar: 'https://productimages.hepsiburada.net/s/212/550/110000190106973.jpg/format:webp',
    description: 'A cleaner.',
    price: 1400,
    category: 'Electronics',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-13T14:43:26.636Z',
    updatedAt: '2022-10-13T14:43:26.636Z',
    __v: 0
  },
  {
    _id: '63484c13f560b83dfb4b402e',
    name: 'MI 11 Lite',
    avatar: 'https://www.gizmochina.com/wp-content/uploads/2021/01/mi11-lite-550x550.jpg',
    description: 'The smartphone is powered by the Qualcomm SM7150 Snapdragon 732G Octa-core processor. The smartphone comes with a 6.55 inches and 1080 x 2400 pixels resolution. It is protected by Corning Gorilla Glass 5.',
    price: 230,
    category: 'Electronics',
    developerEmail: 'ali.cftci@gmail.com',
    createdAt: '2022-10-13T17:34:11.957Z',
    updatedAt: '2022-10-13T17:34:11.957Z',
    __v: 0
  },
  {
    _id: '63484d3bf560b83dfb4b4252',
    name: 'MI 11',
    avatar: 'https://www.gizmochina.com/wp-content/uploads/2020/12/Xiaomi-Mi-11-All-colors-c-e1612792179662-600x600.jpg',
    description: 'The smartphone is powered by Qualcomm SM8350 Snapdragon 888 along with LPPDR5 RAM and UFS 3.1 storage. The smartphone is equipped with an AMOLED panel and provides 1B colors, 120Hz, HDR10+, and 1500 nits (peak).',
    price: 330,
    category: 'Electronics',
    developerEmail: 'ali.cftci@gmail.com',
    createdAt: '2022-10-13T17:39:07.611Z',
    updatedAt: '2022-10-13T17:39:07.611Z',
    __v: 0
  },
  {
    _id: '63484da9f560b83dfb4b42a3',
    name: 'MI 11 Lite',
    avatar: 'https://www.tradeinn.com/f/13843/138436997/xiaomi-mi-11-lite-5g-8gb-128gb-6.55-smartphone.jpg',
    description: 'The front camera of Xiaomi Mi 11 features 20 MP (wide) while on the rear side there is a triple camera consists of 108 MP (wide) + 13 MP (ultrawide) + 5 MP (macro).',
    price: 233,
    category: 'Electronics',
    developerEmail: 'ali.cftci@gmail.com',
    createdAt: '2022-10-13T17:40:57.041Z',
    updatedAt: '2022-10-13T17:40:57.041Z',
    __v: 0
  },
  {
    _id: '63484f40f560b83dfb4b44fa',
    name: 'IPhone 13',
    avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315655',
    description: 'Iphone',
    price: 2045,
    category: 'Electronics',
    developerEmail: 'ali.cftci@gmail.com',
    createdAt: '2022-10-13T17:47:44.922Z',
    updatedAt: '2022-10-13T17:47:44.922Z',
    __v: 0
  },
  {
    _id: '6348587af560b83dfb4b48a9',
    name: 'Akıllı Robor Süpürge',
    avatar: 'https://images.hepsiburada.net/assets/EE/ProductDesc/HBCV00002TSQ7I.jpg',
    description: 'Ağırlık (kg)\t3\nAşılabilir Engel\t20 mm\nBoy\t325 mm\nÇalışma Modu Sayısı\t6\nÇalışma Süresi\t120 dk\nDerinlik\t149,9 mm\nEmiş Türü\tKuru\nEn\t325 mm\nEPA/HEPA Filtre\tVar',
    price: 4521,
    category: 'Electronics',
    developerEmail: 'mstfrs68@gmail.com',
    createdAt: '2022-10-13T18:27:06.119Z',
    updatedAt: '2022-10-13T18:27:06.119Z',
    __v: 0
  },
  {
    _id: '63486266f560b83dfb4b547c',
    name: 'Gray Sofa',
    avatar: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sfrm=jpg',
    description: 'It is so comfortable sofa',
    price: 987,
    category: 'Furniture',
    developerEmail: 'ali.cftci@gmail.com',
    createdAt: '2022-10-13T19:09:26.729Z',
    updatedAt: '2022-10-13T19:09:26.729Z',
    __v: 0
  },
  {
    _id: '634864aff560b83dfb4b5501',
    name: 'Iphone 14',
    avatar: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135109-1-2_large.jpg',
    description: 'New',
    price: 1299,
    category: 'Electronics',
    developerEmail: 'burkay.sevilmis@gmail.com',
    createdAt: '2022-10-13T19:19:11.642Z',
    updatedAt: '2022-10-13T19:19:11.642Z',
    __v: 0
  },
  {
    _id: '63488723f560b83dfb4b626b',
    name: 'Duracell Basic Kalem Pil 10\'lu Aa',
    avatar: 'https://productimages.hepsiburada.net/s/40/550/10659781869618.jpg/format:webp',
    description: 'Duracell Basic Kalem Pil 10\'lu Aa',
    price: 99,
    category: 'Electronics',
    developerEmail: 'ayseguler.92@gmail.com',
    createdAt: '2022-10-13T21:46:11.436Z',
    updatedAt: '2022-10-13T21:46:11.436Z',
    __v: 0
  },
  {
    _id: '634945d5c0f6e956d4e63bdc',
    name: 'Xiaomi Redmi Note 11 Pro',
    avatar: 'https://productimages.hepsiburada.net/s/212/550/110000189356238.jpg/format:webp',
    description: 'A new phone.',
    price: 8999,
    category: 'Electronics',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-14T11:19:49.065Z',
    updatedAt: '2022-10-14T11:19:49.065Z',
    __v: 0
  },
  {
    _id: '634949cfc0f6e956d4e63fdc',
    name: 'Çok Amaçlı Saklama Kabı',
    avatar: 'https://productimages.hepsiburada.net/s/160/550/110000118729803.jpg/format:webp',
    description: 'A great storage for picnics.',
    price: 59,
    category: 'Hobby',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-14T11:36:47.921Z',
    updatedAt: '2022-10-14T11:36:47.921Z',
    __v: 0
  },
  {
    _id: '63494a17c0f6e956d4e640fc',
    name: 'Daphnela LED Sıcaklık Göstergeli Akıllı Vakumlu Yalıtımlı Termos',
    avatar: 'https://productimages.hepsiburada.net/s/97/550/110000039707052.jpg/format:webp',
    description: 'Great water source.',
    price: 200,
    category: 'Hobby',
    developerEmail: 'berkegoktuna17@gmail.com',
    createdAt: '2022-10-14T11:37:59.037Z',
    updatedAt: '2022-10-14T11:37:59.037Z',
    __v: 0
  },
  {
    _id: '634bf35495e919c56ed6dbd1',
    name: 'Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:04:36.968Z',
    updatedAt: '2022-10-16T12:04:36.968Z',
    __v: 0
  },
  {
    _id: '634bf4dc95e919c56ed6dc0c',
    name: 'Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:11:08.946Z',
    updatedAt: '2022-10-16T12:11:08.946Z',
    __v: 0
  },
  {
    _id: '634bf58d95e919c56ed6dc14',
    name: 'Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:14:05.592Z',
    updatedAt: '2022-10-16T12:14:05.592Z',
    __v: 0
  },
  {
    _id: '634bf5b295e919c56ed6dc18',
    name: 'Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:14:42.617Z',
    updatedAt: '2022-10-16T12:14:42.617Z',
    __v: 0
  },
  {
    _id: '634bf6f595e919c56ed6dc26',
    name: 'Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:20:05.505Z',
    updatedAt: '2022-10-16T12:20:05.505Z',
    __v: 0
  },
  {
    _id: '634bf74c95e919c56ed6dc2a',
    name: 'Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:21:32.833Z',
    updatedAt: '2022-10-16T12:21:32.833Z',
    __v: 0
  },
  {
    _id: '634bf7c995e919c56ed6dc3a',
    name: 'My Guitar',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:23:37.927Z',
    updatedAt: '2022-10-16T12:23:37.927Z',
    __v: 0
  },
  {
    _id: '634bf91f95e919c56ed6dc4e',
    name: 'My Guitar 2',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:29:19.095Z',
    updatedAt: '2022-10-16T12:29:19.095Z',
    __v: 0
  },
  {
    _id: '634bf9a495e919c56ed6dc60',
    name: 'My Guitar 2',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:31:32.986Z',
    updatedAt: '2022-10-16T12:31:32.986Z',
    __v: 0
  },
  {
    _id: '634bf9fe95e919c56ed6dc7c',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:33:02.007Z',
    updatedAt: '2022-10-16T12:33:02.007Z',
    __v: 0
  },
  {
    _id: '634bfb7e95e919c56ed6dc8a',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:39:26.970Z',
    updatedAt: '2022-10-16T12:39:26.970Z',
    __v: 0
  },
  {
    _id: '634bfbc795e919c56ed6dc92',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:40:39.276Z',
    updatedAt: '2022-10-16T12:40:39.276Z',
    __v: 0
  },
  {
    _id: '634bfbe795e919c56ed6dc9e',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:41:11.934Z',
    updatedAt: '2022-10-16T12:41:11.934Z',
    __v: 0
  },
  {
    _id: '634bfc2a95e919c56ed6dcae',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:42:18.289Z',
    updatedAt: '2022-10-16T12:42:18.289Z',
    __v: 0
  },
  {
    _id: '634bfc4795e919c56ed6dcb8',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:42:47.775Z',
    updatedAt: '2022-10-16T12:42:47.775Z',
    __v: 0
  },
  {
    _id: '634bfc5195e919c56ed6dcbe',
    name: 'My Electric Guitar ',
    avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
    description: 'Description',
    price: 1200,
    category: 'Hobby',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T12:42:57.408Z',
    updatedAt: '2022-10-16T12:42:57.408Z',
    __v: 0
  },
  {
    _id: '634c4e2d87c594c8e04c85aa',
    name: 'Hoodie',
    avatar: 'https://cdn.shopify.com/s/files/1/1610/4725/products/DW2HoodieBlackBack_900x.jpg?v=1624629333',
    description: 'REGULAR FIT 100% ORGANIC COTTON WORLDWIDE SHIPPING: DELIVERY & HANDLING AUTHENTIC SUSPICIOUS GOODS ARE ONLY AVAILABLE THROUGH',
    price: 99,
    category: 'Clothing',
    developerEmail: 'bdemirer70@gmail.com',
    createdAt: '2022-10-16T18:32:13.225Z',
    updatedAt: '2022-10-16T18:32:13.225Z',
    __v: 0
  }
];
