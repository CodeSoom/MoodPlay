import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SearchMusicContainer from './SearchMusicContainer';

import MUSICITEMS from '../../fixtures/musicItems';

jest.mock('react-redux');

describe('SearchMusicContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      searchTextInput: '아이유',
      searchMusic: MUSICITEMS,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders title', () => {
    const { container } = render(<SearchMusicContainer />);

    expect(container).toHaveTextContent('원하는 플레이리스트가 없다면 더 찾아볼까요?');
  });

  it('renders input field', () => {
    const { getByRole } = render(<SearchMusicContainer />);

    expect(getByRole('textbox')).toHaveDisplayValue('아이유');
  });

  it('calls dispatch', () => {
    const { getByRole, getByText } = render(<SearchMusicContainer />);

    fireEvent.change(getByRole('textbox'), { target: { value: 'mbti' } });

    expect(dispatch).toBeCalledTimes(1);

    fireEvent.click(getByText('검색'));

    expect(dispatch).toBeCalledTimes(2);
  });

  context('with searchMusic', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        searchMusic: MUSICITEMS,
      }));
    });

    it('renders searched music', () => {
      const { container } = render(<SearchMusicContainer />);

      MUSICITEMS.forEach(({
        snippet: { title, channelTitle },
      }) => {
        expect(container).toHaveTextContent(title);
        expect(container).toHaveTextContent(channelTitle);
      });
    });

    it('calls dispatch', () => {
      const { getByText } = render(<SearchMusicContainer />);

      MUSICITEMS.forEach(({
        snippet: { title },
      }) => {
        fireEvent.click(getByText(title));
      });

      expect(dispatch).toBeCalledTimes(MUSICITEMS.length * 2);
    });
  });

  context('without searchMusic', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        searchMusic: [],
      }));
    });

    it('renders recommendation text', () => {
      const { container } = render(<SearchMusicContainer />);

      MUSICITEMS.forEach(({
        snippet: { title, channelTitle },
      }) => {
        expect(container).not.toHaveTextContent(title);
        expect(container).not.toHaveTextContent(channelTitle);
      });

      expect(container)
        .toHaveTextContent('이런건 어떠세요?');
      expect(container)
        .toHaveTextContent('당신의 MBTI를 들어볼까요? 당신의 MBTI를 검색해보세요.');
      expect(container)
        .toHaveTextContent('좋아하는 가수를 검색해보세요.');
      expect(container)
        .toHaveTextContent('원하는 년대를 검색해 추억의 플레이리스트를 들어보세요');
    });
  });
});
