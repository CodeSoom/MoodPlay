import React from 'react';

import styled from '@emotion/styled';

import AddPlaylistForm from './AddPlaylistForm';
import PlaylistCheckbox from './PlaylistCheckbox';

const Modal = styled.div({
  color: '#000',
  background: '#fff',
  minWidth: '250px',

  '& p': {
    margin: '0',
  },
});

const ModalTitle = styled.div({
  background: '#fff',
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #000',
});

const AddPlaylist = styled.div({
  background: '#fff',
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderTop: '1px solid #000',
});

const StoreMusicModal = React.memo(({
  myPlaylists,
  selectedMusic,
  storeTextFormOpenState,
  storeTextInput,
  onCloseStore,
  onAddPlaylist,
  onOpenTextForm,
  onChangeTextInput,
  onCheckPlaylist,
}) => ((
  <Modal>
    <ModalTitle>
      <h3>저장하기</h3>
      <button
        type="button"
        onClick={onCloseStore}
      >
        x
      </button>
    </ModalTitle>

    <form>
      {
        myPlaylists
          .map(({ playlistTitle, playlists }) => (
            <PlaylistCheckbox
              key={playlistTitle}
              id={playlistTitle}
              onChange={onCheckPlaylist}
              checkState={
                playlists
                  .find(({ id: { videoId } }) => videoId === selectedMusic.id.videoId)
              }
            />
          ))
      }
    </form>

    {
      storeTextFormOpenState
        ? (
          <AddPlaylistForm
            value={storeTextInput}
            onChange={onChangeTextInput}
            onClick={onAddPlaylist}
          />
        )
        : (
          <AddPlaylist
            onClick={onOpenTextForm}
          >
            <p>+ 새 플레이리스트만들기</p>
          </AddPlaylist>
        )
    }
  </Modal>
)));

export default StoreMusicModal;
