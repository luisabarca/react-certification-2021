import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useGlobalContext } from '../../providers/GlobalProvider';

function Private({ children, ...rest }) {
  const { authenticated } = useGlobalContext();

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
