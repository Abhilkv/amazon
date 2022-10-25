import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { InputBox, Button, Loader } from 'app/components';
import { email } from '../../env';

import { productData } from './store/api';

import styles from './styles.scss';

const CreatePage = (props) => {
  const history = useHistory();
  const query = new URLSearchParams(props.location.search);
  const productId = query.get('id');
  const { categories, getCategories, addProduct, submitResponse, loading, getProductsInfo, productDataInfo } = props;
  const [inputDetaisls, setDetails] = useState({
    name: '',
    description: '',
    avatar: '',
    category: '',
    price: '',
    features: '',
    searchKeys: '',
    brand: '',
    gender: '',
    promoLine: '',
    rating: '',
    offerText: '',
    discount: '',
    tags: '',
    seller: '',
    sellerRating: '',
    services: '',
    warranty: ''
  });

  useEffect(() => {
    getCategories();
    getProductsInfo(productId);
    // addData();
  }, []);

  useEffect(() => {
    if (productDataInfo && productDataInfo.name) {
      const updatingData = {};
      Object.keys(inputDetaisls).forEach((item) => {
        updatingData[item] = Array.isArray(productDataInfo[item]) ? productDataInfo[item].join(',') : productDataInfo[item];
      });
      setDetails(updatingData);
    }
  }, [productDataInfo]);


  const addData = () => {
    const feature = (ca) => {
      switch (ca) {
        case 'Electronics':
          return ['4 GB RAM | 64 GB ROM ', 'Expandable Upto 1 TB', '50MP + 5MP + 2MP | 8MP Front Camera', '16.76 cm (6.6 inch) Full HD+ Display', 'Exynos 850 Processor'];
        case 'Clothing':
          return ['1 Year Warranty', 'Cotton Fabric', 'All Season wear', 'Light color shade', 'Free size'];
        case 'Accessories':
          return ['Age Group 8 Yrs', 'Best in segment', 'Exporting quality', 'Made for heavy duty', 'Durable and long lasting'];
        case 'Furniture':
          return ['W x H x D: 16.1 inches x 18.5 inches x 23 inches', 'DIY - Basic assembly to be done with simple tools', 'Material: Particle Board', 'Storage Included', 'Configuration: Straight'];
        default:
          return ['Easy to use', 'Material: Plastic', 'Long lasting', 'Grade: Grade 1', 'Weight Range 400 g'];
      }
    };

    const brand = (index) => {
      const brands = ['Samsung', 'Lenovo', 'LG', 'Apple', 'Micormax', 'Nokia', 'Camal', 'Nexus', 'Nokia', 'Karbon'];
      return brands[index];
    };

    const offer = (index) => {
      const brands = ['Saver Deal', 'Bank Offer on ICICI', 'Top Festival Offers', 'Buy 2 get extra 5% off', 'Up to 50% off', 'Top discount on Sale', 'Value For Money', 'Limited offers'];
      return brands[index];
    };

    const promoLine = (index) => {
      const brands = ['Free Delivery', 'Fast Delivery', 'No coast EMI plans', 'Special Price', 'Partner Offers', 'Bank Offers applied'];
      return brands[index];
    };

    const seller = (index) => {
      const brands = ['HydtelRETAILSsales', 'Pollardwatersolution', 'TOPSKY', 'AmericanEnterprises', 'OmniTechRetail', 'BNUStudio', 'TrueComRetail'];
      return brands[index];
    };


    const setData = (i) => {
      const item = productData[i];
      const real = {
        name: item.name,
        description: item.description,
        avatar: item.avatar,
        category: item.category,
        price: item.price,
        features: feature(item.category),
        searchKeys: [item.name, item.category, 'phone'],
        brand: brand(Math.floor(Math.random() * 10)),
        gender: ['Male', 'Female', 'Others', 'Kids'][Math.floor(Math.random() * 10)],
        promoLine: promoLine((Math.floor(Math.random() * 10)) % 6),
        rating: (Math.floor(Math.random() * 10)) % 6,
        offerText: offer(Math.floor(Math.random() * 10) % 8),
        discount: Math.floor(Math.random() * 100),
        tags: ['Bank Offer10% off on SBI Credit Card, up to ₹1,750, on orders of ₹5000 and aboveT&C', 'Bank Offer10% off on SBI Credit Card EMI Transactions, up to ₹2,250, on orders of ₹5000 and aboveT&C', 'Bank OfferAdditional ₹750 discount on SBI Credit Card and EMI txns on net cart value of INR 2999 and aboveT&C', 'Special PriceGet extra 13% off (price inclusive of cashback/coupon)T&C'],
        seller: seller(Math.floor(Math.random() * 10) % 8),
        sellerRating: (Math.floor(Math.random() * 10)) % 6,
        services: ['1 Year Warranty', 'No Returns Applicable', 'Cash on Delivery available'],
        general: { Modal: 'MLWK3HN/A', Capacity: '4000', Remote: 'No', Conectivity: 'Bluetooth', Brand: 'Realme', Shade: 'White,Black' },
        warranty: ['1 Year Warranty Provided by the Manufacturer from Date of Purchase', 'Manufacturing Defects', '1 Year'],
        productDetails: { Width: '77 mm', Height: '165.5 mm', Depth: '8.4 mm', Weight: '198g' }
      };
      console.log(`${i} data added`);
      addProduct(real, 'POST', '');
    };

    for (let i = 2; i < productData.length; i++) {
      setTimeout(() => {
        setData(i);
      }, i * 500);
    }
    // productData.length
  };


  useEffect(() => {
    if (submitResponse === 'Success') {
      history.push('/home');
    } else if (submitResponse === 'Failed') {
      console.log('Failed to add product');
    }
  }, [submitResponse]);

  const setInput = (value, name, dataType) => {
    setDetails((prev) => ({ ...prev, [name]: dataType === 'array' ? value.split(',') : value }));
  };

  const sumbitDetails = () => {
    addProduct({ ...inputDetaisls, developerEmail: email }, (productDataInfo && productDataInfo.name ? 'PUT' : 'POST'), productId);
  };

  const fields = [
    {
      name: 'name',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Product name'
    },
    {
      name: 'description',
      type: 'address',
      handlerFunction: setInput,
      placeHolder: 'Description'
    },
    {
      name: 'avatar',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Image URL'
    },
    {
      name: 'features',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Features',
      dataType: 'array'
    },
    {
      name: 'searchKeys',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'search keys comma separated',
      dataType: 'array'
    },
    {
      name: 'brand',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Brand'
    },
    {
      name: 'gender',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Genders comma separated',
      dataType: 'array'
    },
    {
      name: 'promoLine',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Promo Text'
    },
    {
      name: 'rating',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Rating'
    },
    {
      name: 'offerText',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Offer Text'
    },
    {
      name: 'discount',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Discount'
    },
    {
      name: 'tags',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Tags: Comma separated',
      dataType: 'array'
    },
    {
      name: 'sellerRating',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Seller Rating: number < 5'
    },
    {
      name: 'services',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Services: Comma separated',
      dataType: 'array'
    },
    {
      name: 'warranty',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Warranty: Comma separated',
      dataType: 'array'
    }
  ];

  return (
    (<>
      {loading ? <Loader /> : (
        <div className={styles.container}>
          <h2 className={styles.headline}>Create Product</h2>
          {fields.map((field) => (
            <InputBox
              fieldName={field.name}
              type={field.type}
              inputHandler={field.handlerFunction}
              placeHolder={field.placeHolder}
              value={inputDetaisls[field.name]}
            />
          ))}
          <select value={inputDetaisls.category} onChange={(e) => { setInput(e.target.value, 'category'); }} name="category" id="category" className={styles.category}>
            <option value="" className={styles.optionText}>Category</option>
            {categories.length > 0 && categories.map((item) => (
              <option value={item.name} className={styles.optionText} key={item.name}>{item.name}</option>
            ))}
          </select>
          <InputBox
            fieldName="price"
            type="text"
            inputHandler={setInput}
            placeHolder="Price"
            value={inputDetaisls.price}
          />
          <Button label="SUBMIT" onClick={sumbitDetails} />
        </div>
      )}
    </>)
  );
};


CreatePage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  getCategories: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  submitResponse: PropTypes.string,
  loading: PropTypes.bool,
  getProductsInfo: PropTypes.func.isRequired,
  productDataInfo: PropTypes.shape()
};

CreatePage.defaultProps = {
  categories: [],
  submitResponse: '',
  loading: false,
  productDataInfo: {}
};

export default CreatePage;
