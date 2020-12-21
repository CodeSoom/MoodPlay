import React from 'react';

import {
  Wrap,
  MusicItemsTitle,
  MusicItemsWrap,
  MusicItem,
  MusicItemHover,
  MusicItemContents,
  Thumbnail,
  InfoBox,
  TitleWrap,
  Title,
  ChannelTitle,
} from '../styles/musicItems';

const MusicItems = React.memo(({
  music,
  musicItemsTitle,
  onClick,
}) => ((
  <Wrap>
    <MusicItemsTitle>
      {musicItemsTitle}
    </MusicItemsTitle>

    <MusicItemsWrap>
      {
        music.map((musicItem) => {
          const {
            snippet: {
              title, description, channelTitle, thumbnails,
            },
          } = musicItem;

          return ((
            <MusicItem
              key={title}
              onClick={() => onClick(musicItem, music)}
            >
              <MusicItemContents>
                <Thumbnail
                  url={thumbnails.default.url}
                >
                  {description}
                </Thumbnail>
                <InfoBox>
                  <TitleWrap>
                    <Title>{title}</Title>
                  </TitleWrap>
                  <ChannelTitle>{channelTitle}</ChannelTitle>
                </InfoBox>
              </MusicItemContents>
              <MusicItemHover>
                <div />
              </MusicItemHover>
            </MusicItem>
          ));
        })
      }
    </MusicItemsWrap>
  </Wrap>
)));

export default MusicItems;
