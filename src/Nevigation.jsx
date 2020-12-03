import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Wrap = styled.div({
  color: '#fff',
  width: '100px',
  height: '100vh',
  backgroundColor: '#000',
  border: '3px solid #888',
  borderRadius: '10px',
  padding: '100px 15px',
});

const Icons = styled.ul({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Icon = styled.li({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '60px',
  height: '60px',
  marginBottom: '10px',
  background: '#f0f0f0',
  borderRadius: '10px',
});
function Nevigation() {
  return (
    <Wrap>
      <Icons>
        <Icon>
          <Link to="/project-react-2-bbhye1">Mood Select</Link>
        </Icon>
        <Icon>
          <Link to="/project-react-2-bbhye1/moodplay">Home</Link>
        </Icon>
      </Icons>
    </Wrap>
  );
}

export default Nevigation;
