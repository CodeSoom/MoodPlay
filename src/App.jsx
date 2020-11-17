import React from 'react';

import { Global, css } from '@emotion/react';

const GlobalStyles = css`
body {
  background-color: #fff;
  margin : 0;
  padding: 0;
  position: relative;
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
      <h1>Hello</h1>
    </>
  );
}
