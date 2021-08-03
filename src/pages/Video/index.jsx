/* eslint-disable react/no-danger */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import VideoRelated from '../../components/Video/VideoRelated.component';
import { useVideo, useRelatedVideos } from '../../utils/hooks/useVideos';
import './Video.styles.css';

function VideoPage() {
  const query = new URLSearchParams(useLocation().search);
  const videoId = (query && query.get('id')) || '';

  // Get video from YT.
  const video = useVideo(videoId);
  const related = useRelatedVideos(videoId);

  if (!video) return null;

  const {
    snippet: { title, description },
    statistics,
    player,
  } = video;

  return (
    <section className="videopage">
      <div className="video-main">
        <div
          className="video-player"
          dangerouslySetInnerHTML={{
            __html: player.embedHtml,
          }}
        />

        <h3>{title}</h3>

        <div className="statistics">
          <span>{statistics.viewCount} views</span>
          <span>
            <ThumbUp /> {statistics.likeCount}
          </span>
          <span>
            <ThumbDown /> {statistics.dislikeCount}
          </span>
        </div>

        <p>{description}</p>
      </div>
      <div className="video-sidebar">
        {related &&
          related.map((item) => {
            return <VideoRelated video={item} />;
          })}
      </div>
    </section>
  );
}

export default VideoPage;
