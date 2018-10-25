import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Placeholder from '../src/components/Placeholder/Placeholder';

storiesOf('Placeholder', module)
  .add('with beards', () => <Placeholder type="beard" />)
  .add('with animals', () => <Placeholder type="animal" />);
