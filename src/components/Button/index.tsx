import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type VariantType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default';
type SizeType = 'sm' | 'md' | 'lg';

type ButtonContainerType = {
  variant: VariantType;
  size: SizeType;
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

const Continaer = styled.button<ButtonContainerType>`
  display: block;
  line-height: 16px;
  appearance: none;
  border: none;
  font-weight: 510;
  border-radius: 3px;

  color: ${({ theme }) => theme.white};
  ${({ size }) => button_sizes[size]};

  background-color: ${({ theme, variant }) => {
    switch (variant) {
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
      case 'default':
        return theme.white;
    }
  }};
`;

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  variant?: VariantType;
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { size = 'md', variant = 'primary', children } = props;
  return (
    <Continaer variant={variant} size={size}>
      {children}
    </Continaer>
  );
};

export default Button;
