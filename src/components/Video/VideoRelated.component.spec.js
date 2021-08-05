/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

// CUT.
import VideoRelated from './VideoRelated.component';

import { SearchContext } from '../../providers/SearchProvider';

// Returns 3 videos
jest.mock('../../utils/hooks/useVideos');

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => <div role="link">{children}</div>),
  };
});

const currentVideo = {
  kind: "youtube#searchResult",
  etag: "G92NWfwsZsCq390K5iD559vVeII",
  id: {
    kind: "youtube#video",
    videoId: "nmXMgqjQzls"
  },
  snippet: {
    publishedAt: "2019-09-30T23:25:15Z",
    channelId: "UCPGzT4wecuWM0BH9mPiulXg",
    title: "Video Tour | Welcome to Wizeline Guadalajara",
    description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
        width: 480,
        height: 360
      },
      standard: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg",
        width: 640,
        height: 480
      },
      maxres: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg",
        width: 1280,
        height: 720
      }
    },
    channelTitle: "Wizeline",
    liveBroadcastContent: "none",
    publishTime: "2019-09-30T23:25:15Z"
  }
};

const renderVideoRelated = (snap) => {
  const isSnap = snap || false;
  const component = <VideoRelated video={currentVideo} />;

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};


describe('VideoRelated Component', () => {
  beforeEach(() => {
    renderVideoRelated();
  });

  it('should match snapshot', () => {
    const snap = renderVideoRelated(true);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should render a thumbnail image', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('should render a title', () => {
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
