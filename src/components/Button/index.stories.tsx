import Button from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
  id: '1',
  argTypes: {
    size: { name: '사이즈', defaultValue: 'md' },
    variant: { name: '타입' },
    children: { name: '텍스트', type: 'string', defaultValue: 'Default Text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Success = Template.bind({});

Success.args = {
  variant: 'success',
};

export const Info = Template.bind({});

Info.args = {
  variant: 'info',
};

export const Warning = Template.bind({});

Warning.args = {
  variant: 'warning',
};

export const Danger = Template.bind({});

Danger.args = {
  variant: 'danger',
};

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
};
