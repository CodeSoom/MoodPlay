import React, { useCallback } from 'react';

import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import {
  setStoreOpenState,
  setStoreTextFormOpenState,
  setStoreTextInput,
  storePlaylistTitle,
} from './slice';

import StoreMusicModal from './StoreMusicModal';

import { get } from './utils';

const ModalWrap = styled.div({
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '99',
});

const StoreMusicContainer = React.memo(() => {
  const dispatch = useDispatch();

  const myPlaylists = useSelector(get('myPlaylists'));
  const storeOpenState = useSelector(get('storeOpenState'));
  const storeTextInput = useSelector(get('storeTextInput'));
  const storeTextFormOpenState = useSelector(get('storeTextFormOpenState'));

  const handleStoreOpenState = useCallback((event) => {
    if (event.target === event.currentTarget) {
      dispatch(setStoreOpenState());
    }
  }, [dispatch]);

  const handleTextFormOpen = useCallback(() => {
    dispatch(setStoreTextFormOpenState());
  }, [dispatch]);

  const handleTextInputChange = useCallback((text) => {
    dispatch(setStoreTextInput(text));
  }, [dispatch]);

  const handleAddPlaylist = useCallback(() => {
    dispatch(storePlaylistTitle());
  }, [dispatch]);

  return (
    <>
      {
        storeOpenState
          ? (
            <ModalWrap
              onClick={handleStoreOpenState}
            >
              <StoreMusicModal
                myPlaylists={myPlaylists}
                storeTextFormOpenState={storeTextFormOpenState}
                storeTextInput={storeTextInput}
                onCloseStore={handleStoreOpenState}
                onAddPlaylist={handleAddPlaylist}
                onOpenTextForm={handleTextFormOpen}
                onChangeTextInput={handleTextInputChange}
              />
            </ModalWrap>
          )
          : null
      }
    </>
  );
});

export default StoreMusicContainer;
