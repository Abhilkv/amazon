/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Carousel from 'react-grid-carousel';

import styles from './styles.scss';

const CustomCarousel = (props) => {
  const carousel = [
    {
      link: '../../../../assets/home/carousel/1.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/carousel/2.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/carousel/3.png',
      path: '/home/Clothing'
    },
    {
      link: '../../../../assets/home/carousel/4.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/carousel/5.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/carousel/6.png',
      path: '/home/Clothing'
    },
    {
      link: '../../../../assets/home/carousel/7.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/carousel/8.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/carousel/1.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/carousel/2.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/carousel/3.png',
      path: '/home/Clothing'
    },
    {
      link: '../../../../assets/home/carousel/4.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/carousel/5.png',
      path: '/home/phone'
    },
    {
      link: '../../../../assets/home/carousel/6.png',
      path: '/home/Clothing'
    },
    {
      link: '../../../../assets/home/carousel/7.png',
      path: '/home/Accessories'
    },
    {
      link: '../../../../assets/home/carousel/8.png',
      path: '/home/phone'
    }
  ];

  return (
    <div className={styles.carouselDiv}>
      <Carousel cols={5} rows={1} gap={10} loop={true}>
        {carousel.map((banner) => (
          <Carousel.Item>
            <div onClick={() => props.redirect(banner.path)} role="presentation" style={{ cursor: 'pointer' }}>
              <img className={styles.carouselImage} src={banner.link} alt="img" width={300} height={200} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
