import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MoodEnergyForm from './MoodEnergyForm';

describe('MoodEnergyForm', () => {
  const handleChange = jest.fn();

  function renderMoodEnergyForm() {
    return render(
      <MoodEnergyForm
        onChange={handleChange}
        field="calm"
      />,
    );
  }

  it('renders mood energy select fields', () => {
    const { container } = renderMoodEnergyForm();

    expect(container).toHaveTextContent('차분하고 싶으세요 아니면 신나고 싶으세요?');
    expect(container).toHaveTextContent('차분한');
    expect(container).toHaveTextContent('신나는');
    expect(container).toHaveTextContent('모르겠어요');
  });

  it('listens onChange event', () => {
    const { getByLabelText } = renderMoodEnergyForm();

    fireEvent.click(getByLabelText('차분한'));

    expect(getByLabelText('차분한')).toBeChecked();

    fireEvent.click(getByLabelText('신나는'));

    expect(getByLabelText('신나는')).toBeChecked();

    expect(handleChange).toBeCalledTimes(2);
  });
});
