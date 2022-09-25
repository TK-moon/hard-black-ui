import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const Continaer = styled.button<{}>`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.blue500};
`;

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  primary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return <Continaer>{props.children}</Continaer>;
};

export default Button;
