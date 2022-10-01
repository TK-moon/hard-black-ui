import Button from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: { name: '사이즈', defaultValue: 'md' },
    variant: { name: '타입', defaultValue: 'default' },
    pill: { name: '둥근 타입', defaultValue: false },
    color: { name: '색상', defaultValue: 'primary' },
    disabled: { name: '비활성화', type: 'boolean', defaultValue: false },
    children: { name: '텍스트', type: 'string', defaultValue: 'Default Text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
