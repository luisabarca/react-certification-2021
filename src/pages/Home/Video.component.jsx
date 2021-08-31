import { Card, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { VideoThumbnail, VideoTitle, VideoDescription } from './styled';

const useStyles = makeStyles(() => ({
  card: {
    height: '345px',
    margin: '10px',
    width: '345px',
  },
}));

const Video = ({ video }) => {
  const classes = useStyles();

  if (!video.id?.videoId) return null;

  const { thumbnails, title, description } = video.snippet;
  const id = video.id.videoId;

  return (
    <Link to={`/video?id=${id}`}>
      <Card className={classes.card}>
        <VideoThumbnail role="img" url={thumbnails.high.url} />
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription role="note">{description}</VideoDescription>
      </Card>
    </Link>
  );
};

export default Video;
