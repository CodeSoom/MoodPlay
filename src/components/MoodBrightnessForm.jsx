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

const MoodBrightnessForm = React.memo(({ onChange, field }) => {
  const formValues = [{ id: 'happy', text: '밝은' }, { id: 'dark', text: '어두운' }];

  return (
    <Form>
      <h2>밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?</h2>
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
              name="brightness"
              value={id}
              onChange={onChange}
            />
          </Label>
        ))}
        <Label
          htmlFor="no-brightness"
          checked={field === 'none'}
        >
          모르겠어요
          <input
            type="radio"
            id="no-brightness"
            name="brightness"
            value="none"
            onChange={onChange}
            placeholder="모르겠어요"
          />
        </Label>
      </RadioWrap>
    </Form>

  );
});

export default MoodBrightnessForm;
