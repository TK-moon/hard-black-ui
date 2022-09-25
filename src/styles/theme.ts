interface ThemeInterface {
  background: string;

  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;

  blue500: string;
  blue600: string;

  yellow500: string;
  yellow600: string;

  red500: string;
  red600: string;

  green500: string;
  green600: string;

  purple500: string;
  purple600: string;
}

const common_theme = {
  darkBlue: '#0C0B12',

  grey100: '#F2F2F6',
  grey200: '#EEEEEF',
  grey300: '#E5E5E9',
  grey400: '#C8C8C8',
  grey500: '#8A8A8D',
  grey600: '#616163',

  black: '#000000',
  white: '#ffffff',
};

export const lightTheme: ThemeInterface = {
  background: '#ffffff',

  blue500: '#5A9CF8',
  blue600: '#3F6DAE',

  yellow500: '#DCA550',
  yellow600: '#9A7438',

  red500: '#E67F7C',
  red600: '#A15957',

  green500: '#7EC050',
  green600: '#588638',

  purple500: '#7651DE',
  purple600: '#53399B',

  ...common_theme,
};

export const darkTheme: ThemeInterface = {
  background: '#000000',

  blue500: '#5A9CF8',
  blue600: '#1D47B3',

  yellow500: '#E8A729',
  yellow600: '#A2751D',

  red500: '#EF4E26',
  red600: '#A7371B',

  green500: '#2CBA15',
  green600: '#1F820F',

  purple500: '#6029FF',
  purple600: '#431DB3',

  ...common_theme,
};
