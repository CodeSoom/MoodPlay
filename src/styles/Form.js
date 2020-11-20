import styled from '@emotion/styled';

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  '& input': {
    border: '1px solid red',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    '&: checked': {
      background: '#000',
    },
  },
});

export default Form;
