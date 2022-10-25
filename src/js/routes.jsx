import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const WelcomePage = React.lazy(() => import('./pages/welcome'));
const HomePage = React.lazy(() => import('./pages/homePage'));
const CreatePage = React.lazy(() => import('./pages/createItem'));
const Description = React.lazy(() => import('./pages/itemDetails'));
const Checkout = React.lazy(() => import('./pages/checkout'));
const WishList = React.lazy(() => import('./pages/wishList'));
const OrdersData = React.lazy(() => import('./pages/orderDetails'));


export default (
  <Route>
    <Switch>
      <Redirect from="/" to="/welcome" exact={true} />
      <Route path="/welcome" component={WelcomePage} exact={true} />
      <Route path="/home/:field?" component={HomePage} exact={true} />
      <Route path="/details/:id?" component={Description} exact={true} />
      <Route path="/create" component={CreatePage} exact={true} />
      <Route path="/checkout" component={Checkout} exact={true} />
      <Route path="/wishlist" component={WishList} exact={true} />
      <Route path="/orders/:id?" component={OrdersData} exact={true} />
    </Switch>
  </Route>
);
