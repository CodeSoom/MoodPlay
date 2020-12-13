import styled from '@emotion/styled';

import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Slider = styled.div(() => mq({
  position: 'relative',
  marginTop: '30px',
  width: ['100%', '98%'],
  height: ['12vh', '20vh'],
}));

const Wrap = styled.div({
  position: 'relative',
  height: '100%',
  overflowX: 'hidden',
});

const Cards = styled.ul(({ width, position }) => mq({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'rows',
  width: `${width}px`,
  height: ['11vh', '20vh'],
  transform: `translateX(-${position}px)`,
  transition: 'transform 0.5s ease',
}));

const Card = styled.li(({ selectState, width }) => mq({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 4px',
  padding: ['2vh 4vh ', '5vh 17px'],
  width: [`${width}`, `${selectState ? `${width + 70}px` : `${width}px`}`],
  height: ['11vh', '20vh'],
  border: `${selectState ? '3px solid #F89428' : 'none'}`,
  background: '#181818',
  borderRadius: '32px',
  cursor: 'pointer',

  '& h3': {
    fontSize: '2vh',
    fontWeight: 400,
  },

  '& p': {
    color: '#bdbdbd',
    fontSize: '1.6vh',
  },

  '&: hover': {
    width: [`${width}`, `${width + 70}px`],
  },
}));

const SliderControlButton = styled.button(({ url, position }) => mq({
  fontSize: '0',
  position: 'absolute',
  top: '50%',
  [position]: ['-4.5vh', '-38px'],
  width: ['9vh', '76px'],
  height: ['9vh', '76px'],
  border: '0',
  background: `url(${url}) no-repeat`,
  backgroundSize: ['9vh', '76px'],
  transform: 'translateY(-50%)',

  '&: focus': {
    outline: 0,
  },

  '&: hover': {
    transform: 'translateY(-50%) scale(1.05)',
  },

  '&: active': {
    transform: 'translateY(-50%) scale(1.05)',
  },
}));

export {
  Slider,
  Wrap,
  Cards,
  Card,
  SliderControlButton,
};