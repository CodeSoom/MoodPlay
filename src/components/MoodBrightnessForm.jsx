import React from 'react';

import {
  Form,
  RadioWrap,
  Label,
} from '../styles/moodSeletForm';

const MoodBrightnessForm = React.memo(({ onChange, field }) => {
  const formValues = [
    { id: 'happy', text: '밝은', value: 'happy' },
    { id: 'dark', text: '어두운', value: 'dark' },
    { id: 'no-brightness', text: '모르겠어요', value: '' },
  ];

  return (
    <Form>
      <h2>밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?</h2>
      <RadioWrap>
        {formValues.map(({
          id, text, value,
        }) => ((
          <Label
            htmlFor={id}
            key={id}
            checked={field === value}
          >
            <p>
              {text}
            </p>
            <input
              type="radio"
              id={id}
              name="brightness"
              value={value}
              onChange={onChange}
            />
          </Label>
        )))}
      </RadioWrap>
    </Form>
  );
});

export default MoodBrightnessForm;
