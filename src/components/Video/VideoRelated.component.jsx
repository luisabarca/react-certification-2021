import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const VideoTitle = styled.h2`
  font-size: 0.9rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  letter-spacing: 0.001em;
  padding: 5px 5px 5px 15px;
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

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
}));

const VideoRelated = ({ video }) => {
  const classes = useStyles();
  const id = video.id.videoId;
  const { thumbnails, title } = video.snippet;

  return (
    <Link to={`/video?id=${id}`}>
      <VideoContainer>
        <VideoThumbnail role="img" url={thumbnails.default.url} />
        <VideoTitle className={classes.title}>{title}</VideoTitle>
      </VideoContainer>
    </Link>
  );
};

export default VideoRelated;
