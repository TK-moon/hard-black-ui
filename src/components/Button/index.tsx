import { ThemeInterface } from '@/styles/theme';
import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default' | 'point';
type VariantType = 'text' | 'default' | 'outlined';
type SizeType = 'sm' | 'md' | 'lg';

/**
 * @TODO
 * get~ColorByType 리팩토링
 * 파라미터로 theme, color_type, lightmode brightness, darkmode brightness (400, 500 등) 받아
 * theme[`${color}${brightness}`] 로 접근하여 return
 */

/**
 * 500 컬러 사용
 * @param theme
 * @param color_type
 * @returns
 */
const getColorByColorType = (theme: ThemeInterface, color_type: string) => {
  switch (color_type) {
    case 'primary':
      return theme.blue500;
    case 'success':
      return theme.green500;
    case 'info':
      return theme.grey500;
    case 'warning':
      return theme.yellow500;
    case 'danger':
      return theme.red500;
    case 'point':
      return theme.purple500;
    default:
      return theme.grey500;
  }
};

/**
 * dark mode는 400 light mode는 600 컬러 사용
 * @param theme
 * @param color_type
 * @returns
 */
const getHoverColorByColorType = (theme: ThemeInterface, color_type: string) => {
  const is_light_mode = theme.mode === 'light';

  switch (color_type) {
    case 'primary':
      return is_light_mode ? theme.blue600 : theme.blue400;
    case 'success':
      return is_light_mode ? theme.green600 : theme.green400;
    case 'info':
      return is_light_mode ? theme.grey600 : theme.grey400;
    case 'warning':
      return is_light_mode ? theme.yellow600 : theme.yellow400;
    case 'danger':
      return is_light_mode ? theme.red600 : theme.red400;
    case 'point':
      return is_light_mode ? theme.purple600 : theme.purple400;
    default:
      return is_light_mode ? theme.grey600 : theme.grey400;
  }
};

const getDisabledColorByColorType = (theme: ThemeInterface, color_type: string) => {
  const is_light_mode = theme.mode === 'light';

  switch (color_type) {
    case 'primary':
      return is_light_mode ? theme.blue300 : theme.blue200;
    case 'success':
      return is_light_mode ? theme.green300 : theme.green200;
    case 'info':
      return is_light_mode ? theme.grey300 : theme.grey200;
    case 'warning':
      return is_light_mode ? theme.yellow300 : theme.yellow200;
    case 'danger':
      return is_light_mode ? theme.red300 : theme.red400;
    case 'point':
      return is_light_mode ? theme.purple300 : theme.purple200;
    default:
      return is_light_mode ? theme.grey300 : theme.grey200;
  }
};

const button_sizes = {
  sm: css`
    font-size: 16px;
    padding: 8px 12px;
  `,
  md: css`
    font-size: 18px;
    padding: 16px 20px;
  `,
  lg: css`
    font-size: 20px;
    padding: 24px 28px;
  `,
};

type ButtonContainerType = {
  size: SizeType;
  variant: VariantType;
  color: ColorType;
  pill: boolean;
};

/**
 * CommonStyle
 */
const Container = styled.button<ButtonContainerType>`
  display: block;
  line-height: 16px;
  appearance: none;
  border: none;
  font-weight: 500;
  border-radius: ${({ pill }) => (pill ? '100px' : '3px')};
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  ${({ size }) => button_sizes[size]};
`;

const DefaultButton = styled(Container)`
  background-color: ${({ theme, color }) => getColorByColorType(theme, color)};
  border: none;
  color: ${({ theme, color }) => (color === 'default' ? theme.grey500 : theme.white)};
  &:hover {
    background-color: ${({ theme, color }) => getHoverColorByColorType(theme, color)};
  }
  &:disabled {
    background-color: ${({ theme, color }) => getDisabledColorByColorType(theme, color)};
    color: ${({ theme }) => (theme.mode === 'light' ? theme.white : theme.grey500)};
    cursor: not-allowed;
  }
`;

const OutlinedButton = styled(Container)`
  background-color: transparent;
  border: ${({ theme, color }) => `1px solid ${getColorByColorType(theme, color)}`};
  color: ${({ theme, color }) => getColorByColorType(theme, color)};
  &:hover {
    border: ${({ theme, color }) => `1px solid ${getHoverColorByColorType(theme, color)}`};
    color: ${({ theme, color }) => getHoverColorByColorType(theme, color)};
  }
  &:disabled {
    background-color: ${({ theme, color }) => getDisabledColorByColorType(theme, color)};
    color: ${({ theme, color }) =>
      theme.mode === 'light' ? getDisabledColorByColorType(theme, color) : theme.grey500};
    cursor: not-allowed;
  }
`;

const TextButton = styled(Container)`
  background-color: transparent;
  border-radius: 24px;
  color: ${({ theme, color }) => getColorByColorType(theme, color)};
  &:hover {
    background-color: ${({ theme }) => (theme.mode === 'light' ? theme.grey100 : theme.grey900)};
  }
  &:disabled {
    color: ${({ theme, color }) =>
      theme.mode === 'light' ? getDisabledColorByColorType(theme, color) : theme.grey500};
  }
`;

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  color?: ColorType;
  variant?: VariantType;
  pill?: boolean;
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { size = 'md', variant = 'text', color = 'primary', pill = false, children, ...rest } = props;

  const button_properties = {
    size,
    variant,
    color,
    pill,
    children,
    ...rest,
  };

  switch (variant) {
    case 'text':
      return <TextButton {...button_properties} />;
    case 'outlined':
      return <OutlinedButton {...button_properties} />;
    default:
      return <DefaultButton {...button_properties} />;
  }
};

export default Button;
