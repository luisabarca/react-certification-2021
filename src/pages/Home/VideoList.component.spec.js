/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

// CUT.
import VideoList from './VideoList.component';

import { SearchContext } from '../../providers/SearchProvider';

// Returns 3 videos
jest.mock('../../utils/hooks/useVideos');

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => <div role="link">{children}</div>),
  };
});

const renderVideoListWithSearchProvider = (snap) => {
  const query = 'Wizeline';
  const setQuery = jest.fn();
  const isSnap = snap || false;

  const component = (
    <SearchContext.Provider value={{ query, setQuery}}>
      <VideoList />
    </SearchContext.Provider>
  );

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};


describe('VideoList Component', () => {
  it('should match snapshot', () => {
    const snap = renderVideoListWithSearchProvider(true);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a list of 3 video', () => {
    renderVideoListWithSearchProvider();

    const listItems = screen.getAllByRole('link');
    expect(listItems.length).toBeGreaterThanOrEqual(3);
  });
});
