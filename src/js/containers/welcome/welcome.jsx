import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { InputBox, Button, Loader } from 'app/components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Carousels from './carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './styles.scss';

const CreatePage = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.getProductsInfo();
  }, []);

  const navs = [
    {
      link: '../../../../assets/top.webp',
      title: 'Top Offers',
      path: '/home'
    },
    {
      link: '../../../../assets/accesories.webp',
      title: 'Accessories',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/beauty.webp',
      title: 'Hobby',
      path: '/home/Hobby'
    },
    {
      link: '../../../../assets/electronics.webp',
      title: 'Electronics',
      path: '/home/Electronics'
    },
    {
      link: '../../../../assets/fashion.webp',
      title: 'Cloths',
      path: '/home/Clothing'
    },
    {
      link: '../../../../assets/furniture.webp',
      title: 'Furniture',
      path: '/home/Furniture'
    },
    {
      link: '../../../../assets/mobile.webp',
      title: 'Mobiles',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/grocery.webp',
      title: 'Grocery',
      path: '/home/Accessories'
    }
  ];

  const banners = [
    {
      link: '../../../../assets/banner/1.jpg',
      path: '/home/Furniture'
    },
    {
      link: '../../../../assets/banner/2.jpg',
      path: '/home/Clothing'
    },
    {
      link: '../../../../assets/banner/3.jpg',
      path: '/home/Electronics'
    },
    {
      link: '../../../../assets/banner/4.jpg',
      path: '/home/Hobby'
    },
    {
      link: '../../../../assets/banner/5.jpg',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/banner/6.jpg',
      path: '/home/Furniture'
    },
    {
      link: '../../../../assets/banner/7.jpg',
      path: '/home/Hobby'
    },
    {
      link: '../../../../assets/banner/8.jpg',
      path: '/home/Accessories'
    }
  ];

  const boxSet1 = [
    {
      link: '../../../../assets/home/1.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/2.png',
      path: '/home/Electronics'
    },
    {
      link: '../../../../assets/home/3.png',
      path: '/home/Hobby'
    }
  ];

  const boxSet2 = [
    {
      link: '../../../../assets/home/4.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/5.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/6.png',
      path: '/home/Clothing'
    }
  ];

  const redirect = (path) => {
    history.push(path);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const detectMob = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        {navs.map((item) => (
          <div key={item.title} className={styles.navs} onClick={() => redirect(item.path)} role="presentation">
            <img src={item.link} alt="item" width={60} height={60} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.banner}>
        <Carousel
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          onSwipeMove={true}
          autoPlay={true}
          height={detectMob() ? 400 : 200}
          infiniteLoop={true}
          className={styles.banners}

        >
          {banners.map((banner) => (
            <div onClick={() => redirect(banner.path)} role="presentation" style={{ cursor: 'pointer' }}>
              <img src={banner.link} alt="img" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.card} onClick={() => redirect('/home')} role="presentation">
        <div className={styles.wrapper}>
          <img src="../../../../assets/home/sbi.jpg" alt="sbi" width={130} height={130} />
          <div className={styles.offer}>
            <span className={styles.offerPromo}>10% Instant Discount*</span>
            <span>with SBI Credit & EMI Transactions</span>
          </div>
          <span className={styles.tandc}>
            *T&C Apply
          </span>
          <span className={styles.arrowWrapper}>
            <img src="../../../../assets/home/arrow.svg" alt="sbi" width={50} height={50} />
          </span>
        </div>
      </div>

      <div className={styles.box}>
        {boxSet1.map((box) => (
          <img className={styles.redirectImage} src={box.link} alt="img" width={500} height={260} onClick={() => redirect(box.path)} role="presentation" />
        ))}
      </div>
      <Carousels redirect={redirect} />

      <div className={styles.box}>
        {boxSet2.map((box) => (
          <img className={styles.redirectImage} src={box.link} alt="img" width={500} height={260} onClick={() => redirect(box.path)} role="presentation" />
        ))}
      </div>
      <div className={styles.border} />
    </div>
  );
};


CreatePage.propTypes = {
};

CreatePage.defaultProps = {
  categories: [],
  submitResponse: '',
  loading: false
};

export default CreatePage;
