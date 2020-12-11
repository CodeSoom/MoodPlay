import styled from '@emotion/styled';

const Slider = styled.div({
  position: 'relative',
  marginTop: '30px',
  width: '98%',
  height: '20vh',
});

const Wrap = styled.div({
  position: 'relative',
  height: '20vh',
  overflowX: 'hidden',
});

const Cards = styled.ul(({ width, position }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'rows',
  width: `${width}px`,
  height: '20vh',
  transform: `translateX(-${position}px)`,
  transition: 'transform 0.5s ease',
}));

const Card = styled.li(({ selectState, width }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 4px',
  padding: '5vh 17px',
  width: `${selectState ? `${width + 70}px` : `${width}px`}`,
  height: '20vh',
  border: `${selectState ? '3px solid #F89428' : 'none'}`,
  background: '#181818',
  borderRadius: '32px',
  cursor: 'pointer',

  '& h3': {
    fontSize: '20px',
    fontWeight: 400,
  },

  '& p': {
    color: '#bdbdbd',
    fontsize: '18px',
  },

  '&: hover': {
    width: `${width + 70}px`,
  },
}));

const SliderControlButton = styled.button(({ url, position }) => ({
  fontSize: '0',
  position: 'absolute',
  top: '50%',
  [position]: '-38px',
  width: '76px',
  height: '76px',
  border: '0',
  background: `url(${url}) no-repeat`,
  backgroundSize: '76px',
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
