import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CounterButton from '../src/components/CounterButton/CounterButton';

storiesOf('CounterButton', module).add('basic', () => <CounterButton />);
