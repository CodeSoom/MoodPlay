import React from 'react';

import { render } from '@testing-library/react';

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

  context('with selected music and now playing music items', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedMusic: SELECTEDMUSIC,
      nowPlayingMusicItems: MUSICITEMS,
    }));
  });

  it('renders music player', () => {
    const { container } = render(<MusicPlayerContainer />);

    expect(container).toHaveTextContent('Play');
    expect(container).toHaveTextContent('Pause');
    expect(container).toHaveTextContent('Play');

    expect(container).toHaveTextContent(SELECTEDMUSIC.snippet.title);
    expect(container).toHaveTextContent(SELECTEDMUSIC.snippet.channelTitle);
  });
});
