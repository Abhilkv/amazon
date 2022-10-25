import React from 'react';
import Favourite from '../containers/favourite';
import Layout from '../layout/mainLayout';

const WishList = (props) => (
  <Layout hideFilters={true}>
    <Favourite {...props} />
  </Layout>
);

export default WishList;
