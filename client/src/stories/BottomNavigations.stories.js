import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import List from '../icons/List';

export default {
  title: 'Bottom Navigations',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <BottomNavigation
      links={[
        {
          label: 'New',
          Icon: List,
        },
        {
          label: 'List',
          Icon: List,
        },
        {
          label: 'Progress',
          Icon: List,
        },
      ]}
      value={text('value', 'New')}
      onItemClick={action('item-click')}
    />
  );
};
