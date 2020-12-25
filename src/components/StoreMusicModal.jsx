import React from 'react';

import AddPlaylistForm from './AddPlaylistForm';
import PlaylistCheckbox from './PlaylistCheckbox';

import {
  Modal,
  ModalTitle,
  Form,
  ModalBottom,
  AddPlaylist,
  OpenIcon,
  SubmitButton,
} from '../styles/storeMusicModal';

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

    <Form>
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
    </Form>

    <ModalBottom>
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
              <OpenIcon />
              <p>새 플레이리스트 만들기</p>
            </AddPlaylist>
          )
      }

      <SubmitButton
        type="button"
        onClick={() => { }}
      >
        저장
      </SubmitButton>
    </ModalBottom>
  </Modal>
)));

export default StoreMusicModal;
