import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import MusicPlayerContainer from './MusicPlayerContainer';

import MUSICITEMS from '../fixtures/musicItems';
import SELECTEDMUSIC from '../fixtures/selectedMusic';

jest.mock('react-redux');

describe('MusicPlayerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  function mockSelector(selectedMusic, nowPlayingMusicItems) {
    return useSelector.mockImplementation((selector) => selector({
      selectedMusic,
      nowPlayingMusicItems,
    }));
  }

  context('with selected music and now playing music items', () => {
    it('renders music player', () => {
      mockSelector(SELECTEDMUSIC, MUSICITEMS);

      const { container } = render(<MusicPlayerContainer />);

      expect(container).toHaveTextContent(SELECTEDMUSIC.snippet.title);
      expect(container).toHaveTextContent(SELECTEDMUSIC.snippet.channelTitle);
      expect(container).toHaveTextContent('저장');
    });

    it('renders up next music items', () => {
      mockSelector(SELECTEDMUSIC, MUSICITEMS);

      const { container } = render(<MusicPlayerContainer />);

      expect(container).toHaveTextContent(MUSICITEMS[3].snippet.title);
      expect(container).toHaveTextContent(MUSICITEMS[4].snippet.title);
      expect(container).toHaveTextContent(MUSICITEMS[0].snippet.title);
    });

    it('calls dispatch', () => {
      mockSelector(SELECTEDMUSIC, MUSICITEMS);

      const { getByText } = render(<MusicPlayerContainer />);

      fireEvent.click(getByText(MUSICITEMS[3].snippet.title));
      fireEvent.click(getByText(MUSICITEMS[4].snippet.title));
      fireEvent.click(getByText(MUSICITEMS[0].snippet.title));

      fireEvent.click(getByText('저장'));

      expect(dispatch).toBeCalledTimes(4);
    });
  });

  context('without selected music and now playing music items', () => {
    it('renders empty message', () => {
      mockSelector();

      const { container } = render(<MusicPlayerContainer />);

      expect(container).toHaveTextContent('재생중인 음악이 없습니다!');
    });
  });
});
