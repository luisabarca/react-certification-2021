import React, { useCallback, useContext, useEffect, useState } from 'react';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YoutubeApiContext = React.createContext(null);

export const useYoutubeApi = () => {
  const context = useContext(YoutubeApiContext);

  if (!context) {
    throw new Error('YoutubeApiProvider not available');
  }

  return context;
};

const loadClientScript = () => {
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js';

  return script;
};

export const YouTubeApiProvider = ({ children }) => {
  const { gapi } = window;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const script = loadClientScript();

    script.onload = () => {
      gapi.load('client', () => {
        // Set API KEY.
        gapi.client.setApiKey(YOUTUBE_API_KEY);
        gapi.client.load('youtube', 'v3', () => {
          setReady(true);
        });
      });
    };

    document.body.appendChild(script);
  }, [gapi]);

  const searchVideos = useCallback(async (query) => {
    const options = {
      part: ['snippet'],
      maxResults: 25,
      q: query,
    };

    try {
      const response = await window.gapi.client.youtube.search.list(options);
      return response.result;
    } catch (error) {
      return null;
    }
  }, []);

  const getVideo = useCallback(async (videoId) => {
    const options = {
      part: ['snippet,contentDetails,statistics'],
      id: videoId,
    };

    try {
      const response = await window.gapi.client.youtube.videos.list(options);
      return response.result;
    } catch (error) {
      return null;
    }
  }, []);

  if (!ready) return null;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <YoutubeApiContext.Provider value={{ searchVideos, getVideo }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export default YouTubeApiProvider;
