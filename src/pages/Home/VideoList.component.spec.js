/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

// CUT.
import VideoList from './VideoList.component';

import { GlobalContext } from '../../providers/GlobalProvider';

// Returns 3 videos
jest.mock('../../utils/hooks/useVideos');

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => <div role="link">{children}</div>),
  };
});

const renderVideoListWithGlobalProvider = (snap) => {
  const query = 'Wizeline';
  const setQuery = jest.fn();
  const isSnap = snap || false;

  const component = (
    <GlobalContext.Provider value={{ query, setQuery }}>
      <VideoList />
    </GlobalContext.Provider>
  );

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};

describe('VideoList Component', () => {
  it('should match snapshot', () => {
    const snap = renderVideoListWithGlobalProvider(true);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a list of 3 video', () => {
    renderVideoListWithGlobalProvider();

    const listItems = screen.getAllByRole('link');
    expect(listItems.length).toBeGreaterThanOrEqual(3);
  });
});
