import './App.css';

import { Autocomplete, CssBaseline, CssVarsProvider, Sheet, Stack } from '@mui/joy';

import { ThemeModeToggle } from './core/ThemeModeToggle';

function App() {
  return (
    <CssBaseline>
      <CssVarsProvider defaultMode="system">
        <Stack direction="column" gap={1} py={1} px={1}>
          <ThemeModeToggle />

          <Sheet variant="plain" sx={{ width: '100%', height: '100%' }}>
            <Autocomplete options={[]} />
          </Sheet>
        </Stack>
      </CssVarsProvider>
    </CssBaseline>
  );
}

export default App;
