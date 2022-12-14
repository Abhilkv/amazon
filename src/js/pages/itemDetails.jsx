import React from 'react';
import ItemDescription from '../containers/itemDetails';
import Layout from '../layout/mainLayout';

const Home = (props) => (
  <Layout hideFilters={true}>
    <ItemDescription {...props} />
  </Layout>
);

export default Home;
