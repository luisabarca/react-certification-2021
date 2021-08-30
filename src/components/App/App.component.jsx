/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import YouTubeApiProvider from '../../providers/Youtube';
import GlobalProvider from '../../providers/GlobalProvider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import Header from '../Header';
import VideoPage from '../../pages/Video';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <YouTubeApiProvider>
            <Header />
            <Layout>
              <Switch>
                <Route exact path="/video">
                  <VideoPage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </YouTubeApiProvider>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
