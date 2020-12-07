import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import StoreMusicModal from './StoreMusicModal';

import MYPLAYLISTS from '../../fixtures/myplaylists';

describe('StoreMusicModal', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderStoreMusicModal({
    myPlaylists = [],
    selectedMusic = { id: { videoId: 'aaa' } },
    storeTextFormOpenState = false,
    storeTextInput = '',
  }) {
    return render(
      <StoreMusicModal
        myPlaylists={myPlaylists}
        selectedMusic={selectedMusic}
        storeTextFormOpenState={storeTextFormOpenState}
        storeTextInput={storeTextInput}
        onCloseStore={handleClick}
        onAddPlaylist={handleClick}
        onOpenTextForm={handleClick}
        onChangeTextInput={handleChange}
      />,
    );
  }

  it('renders store music modal title', () => {
    const { container } = renderStoreMusicModal({});

    expect(container).toHaveTextContent('저장하기');
    expect(container).toHaveTextContent('x');
  });

  it('listens click event', () => {
    const { getByText } = renderStoreMusicModal({});

    fireEvent.click(getByText('x'));

    expect(handleClick).toBeCalled();
  });

  context('with my playlists', () => {
    const myPlaylists = MYPLAYLISTS;

    it('renders my playlist checkboxes', () => {
      const { getByLabelText } = renderStoreMusicModal({ myPlaylists });

      myPlaylists.forEach(({ playlistTitle }) => {
        expect(getByLabelText(playlistTitle)).not.toBeNull();
      });
    });
  });

  context('without my playlists', () => {
    const myPlaylists = [];

    it('renders no my playlist checkboxes', () => {
      const { getByLabelText } = renderStoreMusicModal({ myPlaylists });

      myPlaylists.forEach(({ playlistTitle }) => {
        expect(getByLabelText(playlistTitle)).toBeNull();
      });
    });
  });

  context('when storeTextFormOpenState is true', () => {
    const storeTextFormOpenState = true;

    it('renders add playlist text input field', () => {
      const storeTextInput = '조용한 음악';

      const { getByLabelText, getByText } = renderStoreMusicModal({
        storeTextFormOpenState, storeTextInput,
      });

      expect(getByLabelText('이름')).toHaveDisplayValue(storeTextInput);
      expect(getByText('만들기')).not.toBeNull();
    });

    it('listens onChange event', () => {
      const { getByLabelText } = renderStoreMusicModal({ storeTextFormOpenState });

      fireEvent.change(getByLabelText('이름'), { target: { value: '집중할 때 들을 음악' } });

      expect(handleChange).toBeCalled();
    });

    it('listens onClick event', () => {
      const { getByText } = renderStoreMusicModal({ storeTextFormOpenState });

      fireEvent.click(getByText('만들기'));

      expect(handleClick).toBeCalled();
    });
  });

  context('when storeTextFormOpenState is false', () => {
    const storeTextFormOpenState = false;

    it('renders add playlist text message', () => {
      const { container } = renderStoreMusicModal({ storeTextFormOpenState });

      expect(container).toHaveTextContent('+ 새 플레이리스트만들기');
    });

    it('listens onClick event', () => {
      const { getByText } = renderStoreMusicModal({ storeTextFormOpenState });

      fireEvent.click(getByText('+ 새 플레이리스트만들기'));

      expect(handleClick).toBeCalled();
    });
  });
});
