import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MoodEnergyForm from './MoodEnergyForm';

describe('MoodEnergyForm', () => {
  const handleChange = jest.fn();

  it('renders mood energy select fields', () => {
    const { container, getByLabelText } = render(<MoodEnergyForm
      onChange={handleChange}
    />);

    expect(container).toHaveTextContent('차분하고 싶으세요 아니면 신나고 싶으세요?');
    expect(container).toHaveTextContent('차분한');
    expect(container).toHaveTextContent('신나는');
    expect(container).toHaveTextContent('모르겠어요');

    fireEvent.click(getByLabelText('차분한'));

    expect(getByLabelText('차분한')).toBeChecked();

    expect(handleChange).toBeCalled();
  });
});
