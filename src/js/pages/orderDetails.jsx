import React from 'react';
import OrderData from '../containers/orderDetails';
import Layout from '../layout/mainLayout';

const Home = (props) => (
  <Layout hideFilters={true}>
    <OrderData {...props} />
  </Layout>
);

export default Home;
