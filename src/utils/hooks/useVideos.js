import { useEffect, useState } from 'react';
import { useYoutubeApi } from '../../providers/Youtube';

export const useVideos = (query) => {
  const [videos, setVideos] = useState([]);
  const { searchVideos } = useYoutubeApi();

  useEffect(() => {
    const runAsync = async () => {
      const data = await searchVideos(query);
      setVideos((data && data.items) || []);
    };

    runAsync();
  }, [query, searchVideos]);

  return videos;
};

export const useVideo = (videoId) => {
  const [video, setVideo] = useState(null);
  const { getVideo } = useYoutubeApi();

  useEffect(() => {
    if (!videoId || videoId.length < 1) return;

    const runAsync = async () => {
      const data = await getVideo(videoId);
      setVideo((data && data.items[0]) || []);
    };

    runAsync();
  }, [videoId, getVideo]);

  return video;
};
