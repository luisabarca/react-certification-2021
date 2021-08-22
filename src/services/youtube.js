import axiosInstance from '../utils/axios-instance';

/**
 * Search videos by keyword.
 *
 * @param {string} query
 * @param {object} options
 * @returns
 */
export const search = (query, options = {}) => {
  const args = {
    part: 'snippet',
    maxResults: 25,
    ...options,
  };

  const url = `/search?q=${query}&part=${args.part}&maxResults=${args.maxResults}`;

  return axiosInstance.get(url);
};

/**
 * Get a video details by id.
 *
 * @param {string} videoId
 * @param {object} options
 * @returns
 */
export const getVideo = (videoId, options = {}) => {
  const args = {
    part: 'snippet,contentDetails,statistics,player',
    ...options,
  };

  const url = `/videos?id=${videoId}&part=${args.part}`;

  return axiosInstance.get(url);
};

/**
 * Get related videos based on a video id.
 *
 * @param {string} videoId
 * @param {object} options
 * @returns
 */
export const getRelatedVideos = (videoId, options = {}) => {
  const args = {
    part: 'snippet',
    type: 'video',
    ...options,
  };

  const url = `/search?relatedToVideoId=${videoId}&part=${args.part}&type=${args.type}`;

  return axiosInstance.get(url);
};
