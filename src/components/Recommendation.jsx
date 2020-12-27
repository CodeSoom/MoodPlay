import React from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 1025px)',
  '@media(min-width: 1550px)',
]);

const RecommendationWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

const Title = styled.h1(() => mq({
  fontSize: ['2.3vh', '28px', '28px'],
  fontWeight: '900',
  textAlign: 'center',
  margin: ['9vh 10px 0 0', '80px 10px 0 0', '80px 10px 0 0'],
}));

const Content = styled.div(() => mq({
  fontSize: ['2vh', '18px', '20px'],
  fontWeight: '400',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '12px 0',
  width: ['90%', '80%', '540px'],
  height: ['10vh', '10vh', '106px'],
  borderRadius: '24px',
  background: '#181818',
}));

const Recommendation = () => (
  <RecommendationWrap>
    <Title>이런건 어떠세요?</Title>
    <Content>당신의 MBTI를 들어볼까요? 당신의 MBTI를 검색해보세요.</Content>
    <Content>좋아하는 가수를 검색해보세요.</Content>
    <Content>원하는 년대를 검색해 추억의 플레이리스트를 들어보세요</Content>
  </RecommendationWrap>
);

export default Recommendation;
