import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  background-color: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  height: 345px;
  margin: 10px;
  width: 345px;
  overflow: hidden;
`;

const VideoTitle = styled.h2`
  font-size: 1.2rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: black;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.001em;
  padding: 10px 10px 0 10px;
  margin: 0;
`;

const VideoDescription = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.8rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01em;
  padding: 0 10px 10px 10px;
`;

const VideoThumbnail = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url || ''});
  display: block;
  height: 140px;
`;

const Video = ({ video }) => {
  const { thumbnails, title, description } = video.snippet;
  const id = video.id.videoId || video.id.channelId;

  return (
    <Link to={`/video?id=${id}`}>
      <VideoContainer>
        <VideoThumbnail role="img" url={thumbnails.high.url} />
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription role="note">{description}</VideoDescription>
      </VideoContainer>
    </Link>
  );
};

export default Video;
