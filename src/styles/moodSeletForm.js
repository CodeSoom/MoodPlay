import styled from '@emotion/styled';

import {
  MoodBackground,
  MoodBackgroundHover,
  MoodBackgroundActive,
  MoodBackgroundSelected,
} from '../assets/images';

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

const RadioWrap = styled.div({
  display: 'flex',
  flex: 'row',
  margin: '10px',
  padding: '10px 20px',
  border: '1px solid #000',
  borderRadius: '5px',
});

const Label = styled.label(({ checked }) => ({
  fontSize: '32px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 17px',
  width: '32vh',
  height: '13vh',
  background: `url(${checked ? MoodBackgroundSelected : MoodBackground}) no-repeat`,
  backgroundSize: 'contain',

  '&:hover': {
    background: `url(${checked ? MoodBackgroundSelected : MoodBackgroundHover}) no-repeat`,
    backgroundSize: 'contain',
  },

  '&:active': {
    background: `url(${MoodBackgroundActive}) no-repeat`,
    backgroundSize: 'contain',

    '& p': {
      transform: 'translateY(10px)',
    },
  },
}));

export {
  Form,
  RadioWrap,
  Label,
};
