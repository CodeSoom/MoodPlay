import React from 'react';

import styled from '@emotion/styled';

import Form from '../styles/Form';
import RadioWrap from '../styles/RadioWrap';

import {
  MoodBackground,
  MoodBackgroundHover,
  MoodBackgroundActive,
  MoodBackgroundSelected,
} from '../assets/images';

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

const MoodEnergyForm = React.memo(({ onChange, field }) => {
  const formValues = [{ id: 'calm', text: '차분한' }, { id: 'uplifting', text: '신나는' }];

  return (
    <Form>
      <h2>차분하고 싶으세요 아니면 신나고 싶으세요?</h2>
      <RadioWrap>
        {formValues.map(({ id, text }) => (
          <Label
            htmlFor={id}
            key={id}
            checked={field === id}
          >
            <p>
              {text}
            </p>
            <input
              type="radio"
              id={id}
              name="energy"
              value={id}
              onChange={onChange}
            />
          </Label>
        ))}
        <Label
          htmlFor="no-energy"
          checked={field === 'none'}
        >
          모르겠어요
          <input
            type="radio"
            id="no-energy"
            name="energy"
            value="none"
            onChange={onChange}
          />
        </Label>
      </RadioWrap>
    </Form>
  );
});

export default MoodEnergyForm;
