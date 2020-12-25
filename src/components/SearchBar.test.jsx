import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderSearchBar(searchTextInput = '') {
    return render(
      <SearchBar
        searchTextInput={searchTextInput}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );
  }

  it('renders input field', () => {
    const searchTextInput = '아이유';

    const { getByRole } = renderSearchBar(searchTextInput);

    expect(getByRole('textbox')).toHaveDisplayValue(searchTextInput);
  });

  it('listens click event', () => {
    const { getByRole } = renderSearchBar();

    fireEvent.change(getByRole('textbox'), { target: { value: '청하' } });

    expect(handleChange).toBeCalled();
  });

  it('listens click event', () => {
    const { getByText } = renderSearchBar();

    fireEvent.click(getByText('검색'));

    expect(handleClick).toBeCalled();
  });
});
