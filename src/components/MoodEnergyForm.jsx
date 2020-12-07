import React from 'react';

import Form from '../styles/Form';
import RadioWrap from '../styles/RadioWrap';

const MoodEnergyForm = React.memo(({ onChange }) => {
  const formValues = [{ id: 'calm', text: '차분한' }, { id: 'uplifting', text: '신나는' }];

  return (
    <Form>
      <h2>차분하고 싶으세요 아니면 신나고 싶으세요?</h2>
      <RadioWrap>
        {formValues.map(({ id, text }) => (
          <label htmlFor={id} key={id}>
            {text}
            <input
              type="radio"
              id={id}
              name="energy"
              value={id}
              onChange={onChange}
            />
          </label>
        ))}
        <label htmlFor="no-energy">
          모르겠어요
          <input
            type="radio"
            id="no-energy"
            name="energy"
            value="none"
            onChange={onChange}
          />
        </label>
      </RadioWrap>
    </Form>
  );
});

export default MoodEnergyForm;
