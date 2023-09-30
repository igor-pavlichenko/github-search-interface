import './App.css';

import { Autocomplete, CssBaseline, CssVarsProvider, GlobalStyles, Sheet, Stack } from '@mui/joy';
import { RxMagnifyingGlass } from 'react-icons/rx';

import { ThemeModeToggle } from './core/ThemeModeToggle';

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

        <Sheet variant="plain" sx={{ width: '100%', height: '100%', p: 2 }}>
          <Stack
            direction="column"
            alignItems="center"
            gap={4}
            py={{ xs: 1, sm: 2, md: 3 }}
            px={{ xs: 1, sm: 2, md: 4 }}
          >
            <ThemeModeToggle />

            <Autocomplete
              size="lg"
              sx={{ width: { xs: '100%', sm: '600px' } }}
              startDecorator={<RxMagnifyingGlass className="RadixIcon" />}
              options={[]}
            />
          </Stack>
        </Sheet>
      </CssVarsProvider>
    </CssBaseline>
  );
}

export default App;
