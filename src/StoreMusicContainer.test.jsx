import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import StoreMusicContainer from './StoreMusicContainer';

import MYPLAYLISTS from '../fixtures/myplaylists';

jest.mock('react-redux');

describe('StoreMusicContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      myPlaylists: [],
      storeOpenState: false,
    }));
  });

  it('renders store music modal title', () => {
    const myPlaylists = [];
    const storeOpenState = true;

    useSelector.mockImplementation((selector) => selector({
      myPlaylists,
      storeOpenState,
    }));

    const { container } = render(<StoreMusicContainer />);

    expect(container).toHaveTextContent('저장하기');
    expect(container).toHaveTextContent('x');
  });

  it('calls dispatch', () => {
    const myPlaylists = MYPLAYLISTS;
    const storeOpenState = true;

    useSelector.mockImplementation((selector) => selector({
      myPlaylists,
      selectedMusic: { id: { videoId: 'aaa' } },
      storeOpenState,
    }));

    const { getByText } = render(<StoreMusicContainer />);

    fireEvent.click(getByText('x'));

    expect(dispatch).toBeCalled();
  });

  context('with my playlists', () => {
    const myPlaylists = MYPLAYLISTS;
    const storeOpenState = true;

    it('renders my playlist checkboxes', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        selectedMusic: { id: { videoId: 'aaa' } },
        storeOpenState,
      }));

      const { getByLabelText } = render(<StoreMusicContainer />);

      myPlaylists.forEach(({ playlistTitle }) => {
        expect(getByLabelText(playlistTitle)).not.toBeNull();
      });
    });

    it('calls dispatch', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        selectedMusic: { id: { videoId: 'aaa' } },
        storeOpenState,
      }));

      const { getByLabelText } = render(<StoreMusicContainer />);

      myPlaylists.forEach(({ playlistTitle }) => {
        fireEvent.click(getByLabelText(playlistTitle));

        expect(getByLabelText(playlistTitle)).toBeChecked();

        fireEvent.click(getByLabelText(playlistTitle));

        expect(getByLabelText(playlistTitle)).not.toBeChecked();
      });

      expect(dispatch).toBeCalledTimes(4);
    });
  });

  context('without my playlists', () => {
    const myPlaylists = [];
    const storeOpenState = true;

    it('renders no my playlist checkboxes', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        storeOpenState,
      }));

      const { getByLabelText } = render(<StoreMusicContainer />);

      myPlaylists.forEach(({ playlistTitle }) => {
        expect(getByLabelText(playlistTitle)).toBeNull();
      });
    });
  });

  context('when storeTextFormOpenState is true', () => {
    const myPlaylists = [];
    const storeOpenState = true;
    const storeTextFormOpenState = true;

    it('renders add playlist text input field', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        storeOpenState,
        storeTextFormOpenState,
      }));

      const { getByLabelText, getByText } = render(<StoreMusicContainer />);

      expect(getByLabelText('이름')).not.toBeNull();
      expect(getByText('만들기')).not.toBeNull();
    });

    it('calls dispatch', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        storeOpenState,
        storeTextFormOpenState,
      }));

      const { getByLabelText, getByText } = render(<StoreMusicContainer />);

      fireEvent.change(getByLabelText('이름'), { target: { value: '집중할 때 들을 음악' } });
      fireEvent.click(getByText('만들기'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when storeTextFormOpenState is false', () => {
    const myPlaylists = [];
    const storeOpenState = true;
    const storeTextFormOpenState = false;

    it('renders add playlist message', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        storeOpenState,
        storeTextFormOpenState,
      }));

      const { getByText } = render(<StoreMusicContainer />);

      expect(getByText('+ 새 플레이리스트만들기')).not.toBeNull();
    });

    it('calls dispatch', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        storeOpenState,
        storeTextFormOpenState,
      }));

      const { getByText } = render(<StoreMusicContainer />);

      fireEvent.click(getByText('+ 새 플레이리스트만들기'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when storeOpenState is false', () => {
    const myPlaylists = [];
    const storeOpenState = false;
    it('renders nothing', () => {
      useSelector.mockImplementation((selector) => selector({
        myPlaylists,
        storeOpenState,
      }));

      const { container } = render(<StoreMusicContainer />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
