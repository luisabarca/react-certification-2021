/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Video from './Video.component';
import videos from '../../data/youtube-data.json';

describe('Video Component', () => {
  const video1 = videos.items[0];
  beforeEach(() => {
    render(<Video video={video1} />);
  });

  it('should match snapshot', () => {
    const snap = renderer.create(<Video video={video1} />);

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

  it('should render a description', () => {
    const text = screen.getByRole('note');
    expect(text).toBeInTheDocument();
  });
});
