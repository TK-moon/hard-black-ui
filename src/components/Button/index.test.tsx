import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';

describe('Button', () => {
  const { Primary } = composeStories(stories);

  it('render test', () => {
    const _screen = render(<Primary />);
  });
});
