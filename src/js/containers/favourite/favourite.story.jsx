import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkout from './favourite';

storiesOf('HomePage', module)
  .add('default HomePage', () => (
    <Checkout />
  ));
