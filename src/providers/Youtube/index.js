import React, { useCallback, useContext } from 'react';
import * as youtube from '../../services/youtube';

const YoutubeApiContext = React.createContext(null);

export const useYoutubeApi = () => {
  const context = useContext(YoutubeApiContext);

  if (!context) {
    throw new Error('YoutubeApiProvider not available');
  }

  return context;
};

export const YouTubeApiProvider = ({ children }) => {
  const searchVideos = useCallback(async (query) => {
    try {
      const response = await youtube.search(query);
      return response.data;
    } catch (error) {
      return null;
    }
  }, []);

  const getVideo = useCallback(async (videoId) => {
    try {
      const response = await youtube.getVideo(videoId);
      return response.data;
    } catch (error) {
      return null;
    }
  }, []);

  const getRelatedVideos = useCallback(async (videoId) => {
    try {
      const response = await youtube.getRelatedVideos(videoId);
      return response.data;
    } catch (error) {
      return null;
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <YoutubeApiContext.Provider value={{ searchVideos, getVideo, getRelatedVideos }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export default YouTubeApiProvider;
