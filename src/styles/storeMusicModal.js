import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  CloseModalIcon,
  AddPlaylistIcon,
  PlaylistCheckedIcon,
} from '../assets/images';

const mq = facepaint([
  '@media(min-width: 1025px)',
]);

const Modal = styled.div(() => mq({
  position: 'relative',
  width: ['80%', '337px'],
  maxHeight: '50%',
  borderRadius: '24px',
  color: '#fff',
  background: '#383644',

  '& p': {
    margin: '0',
  },
}));

const ModalTitle = styled.div({
  fontSize: '14px',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #929292',
  padding: '29px 18px 17px 26px ',

  '& button': {
    width: '24px',
    height: '24px',
    border: '0',
    outline: '0',
    color: 'transparent',
    background: `url(${CloseModalIcon}) no-repeat`,
    backgroundSize: '24px',
    cursor: 'pointer',
  },
});

const Form = styled.form(() => mq({
  padding: '23px 0 0 29px',
  maxHeight: ['50%', '100%'],
  overflow: ['scroll', 'initial'],
}));

const ModalBottom = styled.div(() => mq({
  position: ['absolute', 'static'],
  left: '0',
  bottom: '0',
  width: '100%',
}));

const AddPlaylist = styled.div(() => mq({
  padding: '0 25px',
  marginTop: ['20px', '0'],
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '& p': {
    fontSize: ['10px', '14px'],
    padding: ['2px 13px', '0 13px'],
    height: '24px',
    borderRadius: '4px',
    background: '#5D5B67',
    color: '#929292',
    cursor: 'pointer',
  },
}));

const OpenIcon = styled.div({
  marginRight: '22px',
  width: '24px',
  height: '24px',
  background: `url(${AddPlaylistIcon}) no-repeat`,
  backgroundSize: '24px',
  cursor: 'pointer',
});

const SubmitButton = styled.button(() => mq({
  fontSize: '14px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: ['10px auto', '37px auto'],
  width: ['40%', '112px'],
  height: ['30px', '40px'],
  border: '0',
  borderRadius: '12px',
  outline: '0',
  background: '#29292F',
  color: '#fff',
  cursor: 'pointer',

  '&: hover': {
    border: '3px solid #F89428',
    borderRadius: '12px',
  },

  '&: active': {
    background: '#F89428',
  },
}));

const AddPlaylistFormWrap = styled.form(() => mq({
  padding: ['0 0 0 25px', '0 0 0 71px'],
  marginTop: ['14px', '0'],
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '& input': {
    fontSize: '14px',
    width: '165px',
    height: '24px',
    padding: '0 13px',
    border: '2px solid #F89428',
    borderRadius: '4px',
    outline: '0',
    background: '#5D5B67',
    color: '#fff',
  },

  '& button': {
    fontSize: '14px',
    marginLeft: '15px',
    border: '0',
    background: 'transparent',
    color: '#F89428',
    outline: '0',
    cursor: 'pointer',
  },
}));

const PlaylistItem = styled.div({
  fontSize: '14px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

const InputLabel = styled.label({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const InputCheckbox = styled.input({
  marginRight: '25px',
  width: '16px',
  height: '16px',
  border: '2px solid #fff',
  borderRadius: '5px',
  outline: 0,

  '&: checked': {
    outline: 0,
    background: `url(${PlaylistCheckedIcon}) no-repeat`,
    backgroundSize: '130%',
    backgroundPosition: 'center',
  },
});

export {
  Modal,
  ModalTitle,
  Form,
  ModalBottom,
  AddPlaylist,
  OpenIcon,
  SubmitButton,
  AddPlaylistFormWrap,
  PlaylistItem,
  InputLabel,
  InputCheckbox,
};
