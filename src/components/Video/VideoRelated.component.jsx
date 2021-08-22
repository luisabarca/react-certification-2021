import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
`;

const VideoTitle = styled.h2`
  font-size: 0.9rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: black;
  font-weight: 300;
  letter-spacing: 0.001em;
  padding: 5px 5px 0 5px;
  margin: 0;
  flex: 2;
`;

const VideoThumbnail = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url || ''});
  height: 90px;
  width: 120px;
  flex: 1;
`;

const VideoRelated = ({ video }) => {
  const { thumbnails, title } = video.snippet;
  const id = video.id.videoId || video.id.channelId;

  return (
    <Link to={`/video?id=${id}`}>
      <VideoContainer>
        <VideoThumbnail role="img" url={thumbnails.default.url} />
        <VideoTitle>{title}</VideoTitle>
      </VideoContainer>
    </Link>
  );
};

export default VideoRelated;
