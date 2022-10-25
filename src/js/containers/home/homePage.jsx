import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { ProductCard, Loader } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
  const { getProductsInfo,
    productsData,
    loading,
    getCategories,
    filterProducts,
    filterCategory } = props;
    const { field } = useParams();

  useEffect(() => {
    if (!field) {
      getProductsInfo();
    }
    getCategories();
  }, []);

  useEffect(() => {
    if (field) {
      if (field === 'mobile' || field === 'phone') {
        filterProducts(`search=${field}`);
      } else if (['Female', 'Male', 'Kids'].includes(field)) {
        filterProducts(`gender=${field}`);
      } else {
        filterProducts(`category=${field}`);
      }
    }
  }, [field]);

  return (
    <div className={styles.productContainer}>
      {loading && <Loader />}
      {productsData.length > 0 && (
      <div className={styles.productBlock}>
        {productsData.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>)}
      {/* <div className={styles.fabButton}>
        <Link to="/create" className={styles.addButton}>
          <span className={styles.addCircle} />
        </Link>
      </div> */}
    </div>
  );
};


HomePage.propTypes = {
  getProductsInfo: PropTypes.func.isRequired,
  productsData: PropTypes.arrayOf(PropTypes.shape()),
  getCategories: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  searchProduct: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired,
  searchKey: PropTypes.string,
  category: PropTypes.string
};

HomePage.defaultProps = {
  productsData: [],
  categories: [],
  searchKey: '',
  category: ''

};

export default HomePage;
