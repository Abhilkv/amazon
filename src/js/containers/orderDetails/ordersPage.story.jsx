import React from 'react';
import { storiesOf } from '@storybook/react';
import OrdersPage from './ordersPage';

storiesOf('HomePage', module)
  .add('default HomePage', () => (
    <OrdersPage />
  ));
