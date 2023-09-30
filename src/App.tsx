import './App.css';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline, CssVarsProvider, GlobalStyles, Stack } from '@mui/joy';

import { gqlClient } from './core/api/graphql/client';
import Search from './core/components/Search';
import { ThemeModeToggle } from './core/components/ThemeModeToggle';

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
            <ThemeModeToggle />

            <Search />
          </Stack>
        </ApolloProvider>
      </CssVarsProvider>
    </CssBaseline>
  );
}

export default App;
