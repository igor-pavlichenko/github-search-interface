import { Grid } from '@mui/joy';

import CustomNavLink from './CustomNavLink';
import { ThemeModeToggle } from './ThemeModeToggle';

const NavBar = () => {
  return (
    <Grid container sx={{ width: { xs: '100%', md: '750px' } }} justifyContent="start" gap={2}>
      <Grid>
        <CustomNavLink to="/">Search</CustomNavLink>
      </Grid>
      <Grid>
        <CustomNavLink to="/favorites">Favorites</CustomNavLink>
      </Grid>
      <Grid marginLeft="auto">
        <ThemeModeToggle />
      </Grid>
    </Grid>
  );
};

export default NavBar;
