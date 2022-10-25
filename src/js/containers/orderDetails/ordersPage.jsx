/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Loader } from 'app/components';


import styles from './styles.scss';

const OrdersPage = (props) => {
  const { ordersData, loading, getOrderInfo } = props;
  const [orderId, setSearch] = useState('');
  const history = useHistory();


  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const id = query.get('id');
    getOrderInfo(id);
  }, []);

  const searchProducts = () => {
    if (orderId !== '') {
      // dispatch({ type: HOMEPAGE_PRODUCTS_DATA_SEARCH, key: searchKeyWord });
      getOrderInfo(orderId);
    }
  };

  const redirect = (path) => {
    history.push(`/details?id=${path}`);
  };


  return (
    <div className={styles.container}>
      {loading ? <Loader /> : (
        <div className={styles.contentbox}>

          <div className={styles.inputWrapper}>
            <input
              value={orderId}
              onChange={(event) => { setSearch(event.target.value); }}
              className={styles.searchBarHeader}
              placeholder="Search for products brands and more"
              onKeyDown={(event) => { event.key === 'Enter' && searchProducts(); }}
            />
            <button className={styles.imageWrapper} onClick={searchProducts} type="button">
              <img src="../../../../assets/searchWhite.svg" alt="search" width={20} height={20} />
              <span>Search Orders</span>
            </button>
          </div>
          <div className={styles.divider} />
          {ordersData && ordersData.userData && (
            <div className={styles.addressWrapper}>
              <div className={styles.addressBlock}>
                <h4>
                  Address
                </h4>
                <span className={styles.details}>
                  <span>{ordersData.userData.address}</span>
                  <span>
                    {' '}
                    {ordersData.userData.city}
                  </span>
                  <span>
                    {' '}
                    {ordersData.userData.state}
                  </span>
                  <span>
                    {' '}
                    {ordersData.userData.landMark}
                  </span>


                </span>
              </div>
              <div className={styles.addressBlock}>
                <h4>
                  Personal Data
                </h4>
                <span className={styles.details}>
                  <span>
                    {' '}
                    {ordersData.userData.name}
                  </span>
                  <span>
                    {' '}
                    {ordersData.userData.phone}
                  </span>
                  <span>
                    {' '}
                    {ordersData.userData.email}
                  </span>
                </span>
              </div>
            </div>
          )}


          <div className={styles.productCard}>
            {ordersData && ordersData.items && (
              Object.values(ordersData.items).map((item) => (
                <div className={styles.addressWrapper} style={{ cursor: 'pointer', width: 'auto' }} onClick={() => redirect(item.data._id)}>
                  <div className={styles.addressBlock}>
                    <h3>
                      {item.data.name}
                    </h3>
                    <div className={styles.detailsWrapper}>
                      <img src={item.data.avatar} width={80} height={80} alt="product" />
                      <div className={styles.productDetailsContainer}>
                        <h4>
                      Price: ₹
                          {((item.data.price) * ((100 - Number(item.data.discount)) / 100)).toFixed(2)}
                        </h4>
                        <h4>
                          Brand:
                          {' '}
                          {item.data.brand}
                        </h4>
                        <span>
                      Payment status:
                          {' '}
                          {ordersData.payment}
                        </span>
                        <span>
                      Quantity:
                          {' '}
                          {item.count}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      )}
    </div>
  );
};


OrdersPage.propTypes = {
  ordersData: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool
};

OrdersPage.defaultProps = {
  ordersData: {},
  loading: false
};

export default OrdersPage;
