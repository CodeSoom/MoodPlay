import React from 'react';

import {
  Form,
  RadioWrap,
  Label,
} from '../styles/moodSeletForm';

const MoodEnergyForm = React.memo(({ onChange, field }) => {
  const formValues = [
    { id: 'calm', text: '차분한', value: 'calm' },
    { id: 'uplifting', text: '신나는', value: 'uplifting' },
    { id: 'no-energy', text: '모르겠어요', value: 'none' },
  ];

  return (
    <Form>
      <h2>차분하고 싶으세요 아니면 신나고 싶으세요?</h2>
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
              name="energy"
              value={value}
              onChange={onChange}
            />
          </Label>
        )))}
      </RadioWrap>
    </Form>
  );
});

export default MoodEnergyForm;
