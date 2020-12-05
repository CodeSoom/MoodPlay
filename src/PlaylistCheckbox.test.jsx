import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import PlaylistCheckbox from './PlaylistCheckbox';

describe('PlaylistCheckbox', () => {
  const handleChange = jest.fn();

  function renderPlaylistCheckbox({ id, checkState }) {
    return render(
      <PlaylistCheckbox
        id={id}
        checkState={checkState}
        onChange={handleChange}
      />,
    );
  }

  context('when checkState is true', () => {
    const id = '마이 플레이리스트';
    const checkState = true;

    it('renders the checked checkbox', () => {
      const { getByLabelText } = renderPlaylistCheckbox({ id, checkState });

      expect(getByLabelText(id)).toBeChecked();
    });

    it('listens onChange event', () => {
      const { getByLabelText } = renderPlaylistCheckbox({ id, checkState });

      fireEvent.click(getByLabelText(id));

      expect(handleChange).toBeCalledWith({
        checked: !checkState,
        playlistTitle: id,
      });
    });
  });

  context('when checkState is false', () => {
    const id = '마이 플레이리스트';
    const checkState = false;

    it('renders the unchecked checkbox', () => {
      const { getByLabelText } = renderPlaylistCheckbox({ id, checkState });

      expect(getByLabelText(id)).not.toBeChecked();
    });

    it('listens onChange event', () => {
      const { getByLabelText } = renderPlaylistCheckbox({ id, checkState });

      fireEvent.click(getByLabelText(id));

      expect(handleChange).toBeCalledWith({
        checked: !checkState,
        playlistTitle: id,
      });
    });
  });
});
