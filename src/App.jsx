import React from 'react';

import { Global, css } from '@emotion/react';

import MoodControllerPage from './MoodControllerPage';

const GlobalStyles = css`
body {
  background-color: #fff;
  margin : 0;
  padding: 0;
  width: 100vw;
  height: 10vh;
  overflow: hidden;
}

body::-webkit-scrollbar {
display: none;
}
`;

export default function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <MoodControllerPage />
    </>
  );
}
