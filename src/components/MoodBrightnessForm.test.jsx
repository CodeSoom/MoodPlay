import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MoodBrightnessForm from './MoodBrightnessForm';

describe('MoodBrightnessForm', () => {
  const handleChange = jest.fn();

  function renderMoodBrightnessForm() {
    return render(
      <MoodBrightnessForm
        onChange={handleChange}
        field="dark"
      />,
    );
  }

  it('renders mood brightness select fields', () => {
    const { container } = renderMoodBrightnessForm();

    expect(container).toHaveTextContent('밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?');
    expect(container).toHaveTextContent('밝은');
    expect(container).toHaveTextContent('어두운');
    expect(container).toHaveTextContent('모르겠어요');
  });

  it('listens onChange event', () => {
    const { getByLabelText } = renderMoodBrightnessForm();

    fireEvent.click(getByLabelText('밝은'));

    expect(getByLabelText('밝은')).toBeChecked();

    fireEvent.click(getByLabelText('어두운'));

    expect(getByLabelText('어두운')).toBeChecked();

    expect(handleChange).toBeCalledTimes(2);
  });
});
