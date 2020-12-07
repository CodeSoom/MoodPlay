import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MoodBrightnessForm from './MoodBrightnessForm';

describe('MoodBrightnessForm', () => {
  const handleChange = jest.fn();

  it('renders mood brightness select fields', () => {
    const { container, getByLabelText } = render(
      <MoodBrightnessForm
        onChange={handleChange}
      />,
    );

    expect(container).toHaveTextContent('밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?');
    expect(container).toHaveTextContent('밝은');
    expect(container).toHaveTextContent('어두운');
    expect(container).toHaveTextContent('모르겠어요');

    fireEvent.click(getByLabelText('밝은'));

    expect(getByLabelText('밝은')).toBeChecked();

    expect(handleChange).toBeCalled();
  });
});
