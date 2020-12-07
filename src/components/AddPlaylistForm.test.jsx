import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import AddPlaylistForm from './AddPlaylistForm';

describe('AddPlaylistForm', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  it('renders input fields', () => {
    const value = '새 플레이리스트';

    const { container, getByLabelText } = render(
      <AddPlaylistForm
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );

    expect(getByLabelText('이름')).toHaveDisplayValue(value);
    expect(container).toHaveTextContent('만들기');
  });

  it('listens onChange event', () => {
    const value = '새 플레이리스트';

    const { getByLabelText } = render(
      <AddPlaylistForm
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );

    fireEvent.change(getByLabelText('이름'), { target: { value: '공부할 때 듣는 음악' } });

    expect(handleChange).toBeCalled();
  });

  it('listens onClick event', () => {
    const value = '새 플레이리스트';

    const { getByText } = render(
      <AddPlaylistForm
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText('만들기'));

    expect(handleClick).toBeCalled();
  });
});
