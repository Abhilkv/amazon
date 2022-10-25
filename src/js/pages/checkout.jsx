import React from 'react';
import CheckoutScreen from '../containers/checkout';
import Layout from '../layout/mainLayout';

const Checkout = (props) => (
  <Layout hideFilters={true}>
    <CheckoutScreen {...props} />
  </Layout>
);

export default Checkout;
