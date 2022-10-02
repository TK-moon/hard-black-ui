export interface ThemeInterface {
  mode: 'light' | 'dark';

  background: string;

  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;

  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;

  yellow100: string;
  yellow200: string;
  yellow300: string;
  yellow400: string;
  yellow500: string;
  yellow600: string;

  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;

  green100: string;
  green200: string;
  green300: string;
  green400: string;
  green500: string;
  green600: string;

  purple100: string;
  purple200: string;
  purple300: string;
  purple400: string;
  purple500: string;
  purple600: string;

  white: string;
  black: string;
}

const common_theme = {
  grey100: '#F2F2F6',
  grey200: '#EEEEEF',
  grey300: '#E5E5E9',
  grey400: '#C8C8C8',
  grey500: '#8A8A8D',
  grey600: '#616163',
  grey700: '#454546',
  grey800: '#29292A',
  grey900: '#141414',

  black: '#000000',
  white: '#ffffff',
};

export const lightTheme: ThemeInterface = {
  mode: 'light',

  background: '#ffffff',

  blue100: '#F7FAFE',
  blue200: '#EFF5FE',
  blue300: '#CEE2FD',
  blue400: '#ACCDFB',
  blue500: '#5A9CF8',
  blue600: '#3F6DAE',

  yellow100: '#FDFAF6',
  yellow200: '#FBF6EE',
  yellow300: '#F5E4CB',
  yellow400: '#EDD2A7',
  yellow500: '#DCA550',
  yellow600: '#9A7438',

  red100: '#FDF8F8',
  red200: '#FCF2F2',
  red300: '#F8D9D8',
  red400: '#F2BFBD',
  red500: '#E67F7C',
  red600: '#A15957',

  green100: '#F8FCF6',
  green200: '#F2F9EE',
  green300: '#D9EDCB',
  green400: '#BEDFA7',
  green500: '#7EC050',
  green600: '#588638',

  purple100: '#F8F6FD',
  purple200: '#F1EEFC',
  purple300: '#D6CBF6',
  purple400: '#BAA8EE',
  purple500: '#7651DE',
  purple600: '#53399B',

  ...common_theme,
};

export const darkTheme: ThemeInterface = {
  mode: 'dark',

  background: '#000000',

  blue100: '',
  blue200: '#0C1E4C',
  blue300: '#143280',
  blue400: '#1D47B3',
  blue500: '#2965FF',
  blue600: '',

  yellow100: '',
  yellow200: '#46320C',
  yellow300: '#745314',
  yellow400: '#A2751D',
  yellow500: '#DCA550',
  yellow600: '',

  red100: '',
  red200: '#48170B',
  red300: '#772713',
  red400: '#A7371B',
  red500: '#EF4E26',
  red600: '',

  green100: '',
  green200: '#0D3806',
  green300: '#165D0A',
  green400: '#1F820F',
  green500: '#2CBA15',
  green600: '',

  purple100: '',
  purple200: '#1D0C4C',
  purple300: '#301480',
  purple400: '#431DB3',
  purple500: '#6029FF',
  purple600: '',

  ...common_theme,
};
