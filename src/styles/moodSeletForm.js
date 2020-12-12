import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  MoodBackground,
  MoodBackgroundHover,
  MoodBackgroundActive,
  MoodBackgroundSelected,
} from '../assets/images';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Form = styled.form(() => mq({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',

  '& h2': {
    fontSize: ['3.2vw', '1.8vw'],
    fontWeight: 'bold',
  },
}));

const RadioWrap = styled.div({
  display: 'flex',
  flex: 'row',
  margin: '10px',
  padding: '10px 20px',
  border: '1px solid #000',
  borderRadius: '5px',
});

const Label = styled.label(({ checked }) => mq({
  fontSize: ['3.2vw', '2vw'],
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 17px',
  width: ['23vw', '15vw'],
  height: ['10vw', '6.5vw'],
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
