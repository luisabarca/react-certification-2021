import React from 'react';
import styled from 'styled-components';
import Video from './Video.component';
import { useVideos } from '../../utils/hooks/useVideos';
import { useSearch } from '../../providers/SearchProvider';

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
  const { query } = useSearch();
  const items = useVideos(query);

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
