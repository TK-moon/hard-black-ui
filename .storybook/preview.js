import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyle';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    light: { ...themes.light, appBg: 'white' },
    dark: { ...themes.dark, appBg: 'black' },
  },
};

const ThemeWrapper = (props) => {
  return <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>{props.children}</ThemeProvider>;
};

export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <GlobalStyle />
      <Story />
    </ThemeWrapper>
  ),
];
