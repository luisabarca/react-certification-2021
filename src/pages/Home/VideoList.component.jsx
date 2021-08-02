import React from 'react';
import styled from 'styled-components';
import Video from './Video.component';
import videos from '../../data/youtube-data.json';

const getVideos = () => videos.items;

const VideoListContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoList = () => {
  const items = getVideos();

  if (items.length < 0) return null;

  return (
    <VideoListContainer>
      {items.map((item) => (
        <Video key={item.etag} video={item} />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
