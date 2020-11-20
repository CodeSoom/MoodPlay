import styled from '@emotion/styled';

const RadioWrap = styled.div({
  border: '1px solid #000',
  borderRadius: '5px',
  margin: '10px',
  padding: '10px 20px',
  '& input': {
    border: '1px solid red',
    width: '20px',
    height: '20px',
    margin: '0 5px',
    cursor: 'pointer',
    '&: checked': {
      background: '#000',
    },
  },
});

export default RadioWrap;
