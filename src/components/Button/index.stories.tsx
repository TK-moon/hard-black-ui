import Button from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'ButtonTest',
  component: Button,
  id: '1',
  argTypes: {
    primary: {
      table: {
        disable: true,
      },
    },
    children: { name: '텍스트', type: 'string', defaultValue: 'Default Text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};
