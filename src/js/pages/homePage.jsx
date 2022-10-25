import React from 'react';
import HomeScreen from '../containers/home';
import Layout from '../layout';

const Home = (props) => (
  <Layout hideFilters={false}>
    <HomeScreen {...props} />
  </Layout>
);

export default Home;
