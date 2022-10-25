import React from 'react';
import { storiesOf } from '@storybook/react';
import Welcome from './welcome';

storiesOf('Welcome', module)
  .add('default CreatePage', () => (
    <Welcome categories={[]} />
  ));
