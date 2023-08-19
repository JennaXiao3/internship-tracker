import '@fontsource/poppins';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from './components/Loading';
import AuthContext from './contexts/AuthContext';
import theme from './theme';

const withSuspense = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const HomePage = React.lazy(() => import('./pages/HomePage'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={[authUser, setAuthUser]}>
          <Routes>
            <Route path="/" element={withSuspense(HomePage)} />
            <Route path="/search" element={withSuspense(SearchResultsPage)} />
            <Route path="/about" element={withSuspense(AboutPage)} />
            <Route path="*" element={withSuspense(ErrorPage)} />
          </Routes>
        </AuthContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
