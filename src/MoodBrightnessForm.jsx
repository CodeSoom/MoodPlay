import React from 'react';

import Form from './styles/Form';
import RadioWrap from './styles/RadioWrap';

export default function MoodBrightnessForm({ onChange }) {
  const formValues = [{ id: 'happy', text: '밝은' }, { id: 'dark', text: '어두운' }];

  return (
    <Form>
      <h2>밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?</h2>
      <RadioWrap>
        {formValues.map(({ id, text }) => (
          <label htmlFor={id} key={id}>
            {text}
            <input
              type="radio"
              id={id}
              name="brightness"
              value={id}
              onChange={onChange}
            />
          </label>
        ))}
        <label htmlFor="no-brightness">
          모르겠어요
          <input
            type="radio"
            id="no-brightness"
            name="brightness"
            value="none"
            onChange={onChange}
          />
        </label>
      </RadioWrap>
    </Form>
  );
}
