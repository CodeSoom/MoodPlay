import React from 'react';

import styled from '@emotion/styled';

const Cards = styled.ul({
  width: '100%',
  display: 'flex',
  flexDirection: 'rows',
  marginTop: '30px',
  overflowX: 'scroll',
});

const Card = styled.li({
  height: '100%',
  width: '200px',
  border: '3px solid #f0f0f0',
  borderRadius: '10px',
  padding: '20px 30px',
  margin: '0 15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  '& p': {
    color: 'dodgerblue',
  },
});

const MusicCategories = React.memo(({ moodCategories, onClick }) => {
  const tags = {
    calm: '차분한',
    uplifting: '신나는',
    happy: '밝은',
    dark: '어두운',
  };

  return (
    <Cards>
      {
        moodCategories.map(([title, tag1, tag2]) => (
          <Card
            key={title}
            onClick={() => onClick({ title, tag1, tag2 })}
          >
            <h3>{title}</h3>
            <p>
              #
              {tags[tag1]}
              {' '}
              {tag2 ? `#${tags[tag2]}` : ''}
            </p>
          </Card>
        ))
      }
    </Cards>
  );
});

export default MusicCategories;
