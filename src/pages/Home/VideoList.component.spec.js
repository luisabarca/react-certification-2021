/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList.component';

describe('VideoList Component', () => {
  it('should match snapshot', () => {
    const snap = renderer.create(<VideoList />);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a list of 25 videos', () => {
    render(<VideoList />);

    const listItems = screen.getAllByRole('link');

    expect(listItems.length).toBeGreaterThanOrEqual(25);
  });
});
