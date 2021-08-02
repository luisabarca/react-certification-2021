/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should match snapshot', () => {
    const snap = renderer.create(<Header />);
  
    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a menu button', () => {
    const hamburgerButton = screen.getByRole('button', {
      name: 'open drawer',
    });

    expect(hamburgerButton).toBeInTheDocument();
  });

  it('should render a search input', () => {
    const component = screen.getByRole('textbox', {
      name: 'search',
    });

    expect(component).toBeInTheDocument();
  });

  it('should render a checkbox for theme switch', () => {
    const component = screen.getByRole('checkbox', {
      name: 'Dark mode',
    });

    expect(component).toBeInTheDocument();
  });
});
