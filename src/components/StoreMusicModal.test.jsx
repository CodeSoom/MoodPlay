import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import StoreMusicModal from './StoreMusicModal';

import MYPLAYLISTS from '../../fixtures/myplaylists';

describe('StoreMusicModal', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();
  const handleSave = jest.fn();

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
        onSavePlaylist={handleSave}
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

    fireEvent.click(getByText('저장'));

    expect(handleSave).toBeCalled();
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

      const { getByRole, getByText } = renderStoreMusicModal({
        storeTextFormOpenState, storeTextInput,
      });

      expect(getByRole('textbox')).toHaveDisplayValue(storeTextInput);
      expect(getByText('Save')).not.toBeNull();
    });

    it('listens onChange event', () => {
      const { getByRole } = renderStoreMusicModal({ storeTextFormOpenState });

      fireEvent.change(getByRole('textbox'), { target: { value: '집중할 때 들을 음악' } });

      expect(handleChange).toBeCalled();
    });

    it('listens onClick event', () => {
      const { getByText } = renderStoreMusicModal({ storeTextFormOpenState });

      fireEvent.click(getByText('Save'));

      expect(handleClick).toBeCalled();
    });
  });

  context('when storeTextFormOpenState is false', () => {
    const storeTextFormOpenState = false;

    it('renders add playlist text message', () => {
      const { container } = renderStoreMusicModal({ storeTextFormOpenState });

      expect(container).toHaveTextContent('새 플레이리스트 만들기');
    });

    it('listens onClick event', () => {
      const { getByText } = renderStoreMusicModal({ storeTextFormOpenState });

      fireEvent.click(getByText('새 플레이리스트 만들기'));

      expect(handleClick).toBeCalled();
    });
  });
});
