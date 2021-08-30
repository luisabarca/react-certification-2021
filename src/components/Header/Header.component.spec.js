/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header.component';

import { GlobalContext } from '../../providers/GlobalProvider';
import AuthProvider from '../../providers/Auth';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

const renderHeaderWithGlobalProvider = (snap) => {
  const isSnap = snap || false;

  const props = {
    query: 'Wizeline',
    setQuery: jest.fn(),
    theme: 'light',
    setTheme: jest.fn(),
    toggleTheme: jest.fn(),
  };

  const component = (
    <Router history={history}>
      <AuthProvider>
        <GlobalContext.Provider value={props}>
          <Header />
        </GlobalContext.Provider>
      </AuthProvider>
    </Router>
  );

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};

describe('Header Component', () => {
  beforeEach(() => {
    renderHeaderWithGlobalProvider();
  });

  it('should render a menu button to open drawer', () => {
    const hamburgerButton = screen.getByRole('button', {
      name: 'open drawer',
    });

    expect(hamburgerButton).toBeInTheDocument();
  });

  it('should be able to open drawer menu and click on go-home button', () => {
    const hamburgerButton = screen.getByRole('button', {
      name: 'open drawer',
    });

    expect(hamburgerButton).toBeInTheDocument();

    userEvent.click(hamburgerButton);

    const component = screen.getByText('Home');

    // Go home button exists.
    expect(component).toBeInTheDocument();

    // Click on the button.
    userEvent.click(component);

    // Url should be home screen.
    expect(history.location.pathname).toBe('/');
  });

  it('should render a search input', () => {
    const component = screen.getByRole('textbox', {
      name: 'search',
    });

    expect(component).toBeInTheDocument();
  });

  it('should have a login button', () => {
    const component = screen.getByText('Login');

    // Login button exists.
    expect(component).toBeInTheDocument();

    // Click on the button.
    userEvent.click(component);

    // Url should be login screen.
    expect(history.location.pathname).toBe('/login');
  });

  it('should have a logout button', () => {
    const component = screen.getByText('Logout');

    // Logout button exists.
    expect(component).toBeInTheDocument();

    // Click on the button.
    userEvent.click(component);

    // Url should be home screen.
    expect(history.location.pathname).toBe('/');
  });

  it('should render a checkbox for theme switch', () => {
    const component = screen.getByRole('checkbox', {
      name: 'Dark mode',
    });

    expect(component).toBeInTheDocument();

    // Default: Theme light.
    expect(component).toHaveProperty('checked', false);

    fireEvent.change(component, {
      target: {
        checked: 'checked',
      },
    });

    // Theme should be changed
    expect(component).toHaveProperty('checked', true);
  });
});
