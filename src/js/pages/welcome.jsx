import React from 'react';
import Welcome from '../containers/welcome';
import Layout from '../layout/mainLayout';

const WishList = (props) => (
  <Layout hideFilters={true}>
    <Welcome {...props} />
  </Layout>
);

export default WishList;
