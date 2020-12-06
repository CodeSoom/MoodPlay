import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Wrap = styled.div({
  color: '#fff',
  width: '234px',
  height: '100vh',
  backgroundColor: '#1B1A20',
  borderRadius: '48px 0 0 48px',

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

function NavigationBar() {
  return (
    <Wrap>
      <Icons>
        <Icon>
          <Link to="/project-react-2-bbhye1">무드 선택</Link>
        </Icon>
        <Icon>
          <Link to="/project-react-2-bbhye1/moodplay">홈</Link>
        </Icon>
        <Icon>
          <Link to="/project-react-2-bbhye1/myplay">마이 플레이</Link>
        </Icon>
      </Icons>
    </Wrap>
  );
}

export default NavigationBar;
