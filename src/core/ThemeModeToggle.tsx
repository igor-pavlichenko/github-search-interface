import { Stack, Switch } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import { RxMoon, RxSun } from 'react-icons/rx';

export const ThemeModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Stack direction="row" spacing={1} useFlexGap alignItems="center">
      <RxSun className="RadixIcon" />
      <Switch
        sx={{ width: 'fit-content' }}
        size="lg"
        variant="outlined"
        color="neutral"
        checked={mode === 'dark'}
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      />
      <RxMoon className="RadixIcon" />
    </Stack>
  );
};
