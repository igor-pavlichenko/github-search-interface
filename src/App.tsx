import './App.css';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline, CssVarsProvider, GlobalStyles, Stack } from '@mui/joy';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { gqlClient } from './core/api/graphql/client';
import NavBar from './core/components/NavBar';
import FavoritesPage from './core/pages/FavoritesPage';
import Search from './core/pages/SearchPage';

function App() {
  return (
    <CssBaseline>
      <CssVarsProvider defaultMode="system">
        <GlobalStyles
          styles={{
            // We recommend using a class over a tag if possible.
            '.RadixIcon': {
              color: 'var(--Icon-color)',
              margin: 'var(--Icon-margin)',
              fontSize: 'var(--Icon-fontSize, 20px)',
              width: '1em',
              height: '1em',
            },
          }}
        />
        <ApolloProvider client={gqlClient}>
          <Stack
            alignItems="center"
            gap={4}
            py={{ xs: 3, md: 5 }}
            px={{ xs: 3, md: 6 }}
            overflow="auto"
          >
            <BrowserRouter>
              <NavBar />

              <Routes>
                <Route path="/" element={<Navigate to="/search" />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </BrowserRouter>
          </Stack>
        </ApolloProvider>
      </CssVarsProvider>
    </CssBaseline>
  );
}

export default App;
