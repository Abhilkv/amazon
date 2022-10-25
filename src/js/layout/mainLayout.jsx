/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import { Accordion,
  AccordionSummary,
  AccordionDetails } from '@material-ui/core';

import { HOMEPAGE_PRODUCTS_DATA_SEARCH } from '../actions';
import styles from './styles.scss';

const Layout = (props) => {
  const [range, setValue] = useState([500, 9999]);
  const [searchKeyWord, setSearch] = useState('');
  const [filterCategory, setCategory] = useState('');
  const [filterGender, setGender] = useState('');
  const [filterRating, setRating] = useState('');
  const history = useHistory();
  const { hideFilters, getProductData, filterProducts } = props;
  const details = useSelector((state) => state.details);

  // Changing State when volume increases/decreases

  // useEffect(() => {
  //   props.filterCategory();
  // }, []);

  const Gender = ['Female', 'Male', 'Others', 'Kids'];
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    props.filterByPricey(newValue);
  };

  const filterData = (event) => {
    const { value, name, id } = event.target;
    setValue([500, 10000]);
    if (name === 'gender') {
      filterProducts(`gender=${id}`);
      setGender(id);
      setSearch('');
      setCategory('');
    } else {
      filterProducts(`${name}=${id}`);
      setCategory(id);
      setGender('');
      setSearch('');
    }
    setRating('');
  };

  const ratingFilter = (count) => {
    filterProducts(`rating=${count}`);
    setRating(count);
    setCategory('');
    setGender('');
    setSearch('');
  };

  const clearFilters = () => {
    props.getProductsInfo();
    setCategory('');
    setGender('');
    setSearch('');
    setRating('');
  };


  const searchProducts = () => {
    if (searchKeyWord !== '') {
      // dispatch({ type: HOMEPAGE_PRODUCTS_DATA_SEARCH, key: searchKeyWord });
      filterProducts(`search=${searchKeyWord}`);
    }
    history.push(`/home`);
  };

  const redirect = (path) => {
    history.push(`/${path}`);
  };

  const navs = [
    {
      name: 'Electronics',
      path: 'home/Electronics'
    },
    {
      name: 'Accessories',
      path: 'home/Accessories'
    },
    {
      name: 'Men',
      path: 'home/Male'
    },
    {
      name: 'Women',
      path: 'home/Female'
    },
    {
      name: 'Kids',
      path: 'home/Kids'
    },
    {
      name: 'Furniture',
      path: 'home/Furniture'
    },
    {
      name: 'Sports&Books',
      path: 'home/Hobby'
    },
    {
      name: 'Offer Zone',
      path: 'home'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logoBlock}>
          <div className={styles.search}>
            <img
              width={150}
              height={45}
              style={{ cursor: 'pointer' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
              alt="logo"
              onClick={() => { history.push('/welcome'); }}
            />
            <div className={styles.inputWrapper}>
              <input
                value={searchKeyWord}
                onChange={(event) => { setSearch(event.target.value); }}
                className={styles.searchBarHeader}
                placeholder="Search for products brands and more"
                onKeyDown={(event) => { event.key === 'Enter' && searchProducts(); }}
              />
              <img src="../../../assets/search.svg" alt="search" onClick={searchProducts} style={{ cursor: 'pointer' }} width={20} height={20} />
            </div>
          </div>
          <div className={styles.search2}>
            <div className={styles.cartBlock} onClick={() => redirect('welcome')} role="presentation">
              <img
                alt="favourite"
                src="../../../assets/home.svg"
                height={20}
                width={20}
              />
              <span>Home</span>
            </div>
            <div className={styles.cartBlock} onClick={() => redirect('orders')} role="presentation">
              <img
                alt="favourite"
                src="../../../assets/orders.svg"
                height={20}
                width={20}
              />
              <span>Orders</span>
            </div>
            <div className={styles.cartBlock} onClick={() => redirect('wishlist')} role="presentation">
              <img
                alt="favourite"
                src="../../../assets/heart.svg"
                height={20}
                width={20}
              />
              {details.favourite && (Object.keys(details.favourite)).length > 0 && <p className={styles.cartCount}>{(Object.keys(details.favourite)).length}</p>}
              <span>Favourite</span>
            </div>
            <div className={styles.cartBlock} onClick={() => redirect('checkout')} role="presentation">
              <img
                alt="cart"
                src="../../../assets/cart.svg"
                height={20}
                width={20}
              />
              {details.cart && (Object.keys(details.cart)).length > 0 && <p className={styles.cartCount}>{(Object.keys(details.cart)).length}</p>}
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          {navs.map((nav) => (
            <span onClick={() => redirect(nav.path)} role="presentation">
              {nav.name}
              {' '}
              <img
                alt="favourite"
                src="../../../assets/navArrow.svg"
                height={30}
                width={30}
              />
            </span>
          ))}


        </div>
      </div>
      {!hideFilters ? (
        <div className={styles.content}>
          <div className={styles.filter}>
            <div className={styles.filtersBox}>
              <div className={styles.boxContainer}>
                <div className={styles.filterTitle}>
                  <h3>Filters</h3>
                  {(filterCategory || filterGender || filterRating || searchKeyWord) && <span onClick={clearFilters}>CLEAR</span>}
                </div>
                <input
                  value={searchKeyWord}
                  onChange={(event) => { setSearch(event.target.value); }}
                  className={styles.searchBar}
                  placeholder="Search"
                  onKeyDown={(event) => { event.key === 'Enter' && searchProducts(); }}
                />

                <div className={styles.sliderWrapper}>
                  <Accordion defaultExpanded={true} style={{ 'min-width': '279px' }}>
                    <AccordionSummary
                      expandIcon={<img src="../../../../assets/down.svg" alt="arrow" />}
                      aria-controls="panel1a-content"
                      id="cart"
                    >
                      <span className={styles.genderTitle}>CATEGORY</span>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', 'flex-direction': 'column' }}>
                      {props.categories && props.categories.length > 0 && props.categories.map((item) => (
                        <label className={styles.container} key={item}>
                          {item.name}
                          <input onClick={filterData} type="radio" checked={item.name === filterCategory} name="category" id={item.name} />
                          <span className={styles.checkmark} />
                        </label>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>

                {/* <select value={filterCategory} onChange={filterData} name="category" id="category" className={styles.category} style={{ cursor: 'pointer' }}>
                  <option value="" className={styles.optionText}>Category</option>
                  {props.categories && props.categories.length > 0 && props.categories.map((item) => (
                    <option value={item.name} className={styles.optionText} key={item.name}>{item.name}</option>
                  ))}
                </select> */}
                <div className={styles.priceSlider}>
                  <span className={styles.priceField}>
                        PRICE RANGE
                    {' '}
                    <span style={{ 'font-size': '10px', 'font-weight': '400' }}>
                      ($
                      {range[0]}
                      {' '}
                      - $
                      {range[1]}
                      )
                    </span>
                  </span>
                  <Slider
                    value={range}
                    onChange={rangeSelector}
                    valueLabelDisplay="auto"
                    max={9999}
                    min={50}
                    step={10}
                    disableSwap={true}
                    className={styles.slider}
                  />
                </div>
                <div className={styles.sliderWrapper}>
                  <Accordion defaultExpanded={true} style={{ 'min-width': '279px' }}>
                    <AccordionSummary
                      expandIcon={<img src="../../../../assets/down.svg" alt="arrow" />}
                      aria-controls="panel1a-content"
                      id="cart"
                    >
                      <span className={styles.genderTitle}>GENDER</span>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', 'flex-direction': 'column' }}>
                      {Gender.map((item) => (
                        <label className={styles.container} key={item}>
                          {item}
                          <input onClick={filterData} type="radio" checked={item === filterGender} name="gender" id={item} />
                          <span className={styles.checkmark} />
                        </label>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className={styles.sliderWrapper}>
                  <Accordion defaultExpanded={true} style={{ 'min-width': '279px' }}>
                    <AccordionSummary
                      expandIcon={<img src="../../../../assets/down.svg" alt="arrow" />}
                      aria-controls="panel1a-content"
                      id="cart"
                    >
                      <span className={styles.genderTitle}>CUSTOMER RATINGS</span>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', 'flex-direction': 'column' }}>
                      <div style={{ 'margin-top': '10px', cursor: 'pointer' }}>
                        {Array(5).fill().map((countItem, index) => (
                          <div className={styles.starWrapper} onClick={() => { setValue([500, 10000]); ratingFilter(5 - index); }} role="presentation">
                            {/* {Array(5).fill().map((no, inner) => ((inner + 1) <= (5 - index) ? <img src="../../../assets/starFilled.svg" alt="star" /> : <img src="../../../assets/starEmpty.svg" alt="star" />))}
                        {' '}
                        {index !== 0 && <span>& up</span>} */}
                            <input checked={(5 - index) === filterRating} type="checkbox" id={`rating${5 - index}`} name={`${5 - index}`} value={`${5 - index}`} />
                            <label htmlFor="vehicle1">{`${5 - index}★`}</label>
                            <br />
                          </div>
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productsWrapper}>
            {props.children}
          </div>
        </div>) : (
          <div className={styles.createWrapper}>
            {props.children}
          </div>
      )}
      <div className={styles.footer} style={{ cursor: 'pointer' }} onClick={() => redirect('home')} role="presentation">
        <img
          alt="cart"
          src="../../../assets/footer.png"
          className={styles.mainFooter}
        />
        <img
          alt="cart"
          src="../../../assets/about.png"
          className={styles.about}
        />
      </div>
    </div>
  );
};


export default Layout;
