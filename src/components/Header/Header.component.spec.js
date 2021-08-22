/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

import { SearchContext } from '../../providers/SearchProvider';

const renderHeaderWithSearchProvider = (snap) => {
  const query = 'Wizeline';
  const setQuery = jest.fn();
  const isSnap = snap || false;

  const component = (
    <SearchContext.Provider value={{ query, setQuery}}>
      <Header />
    </SearchContext.Provider>
  );

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};

describe('Header Component', () => {
  beforeEach(() => {
    renderHeaderWithSearchProvider();
  });

  it('should match snapshot', () => {
    const snap = renderHeaderWithSearchProvider(true);
  
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
