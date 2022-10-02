import React from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global_style = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={global_style} />;
};

export default GlobalStyle;
