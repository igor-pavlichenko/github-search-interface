import { Grid } from '@mui/joy';

import { Repository } from '~/core/api/graphql/searchRepositoriesQuery';

import PrimaryLanguage from './PrimaryLanguage';
import StarsCount from './StarsCount';

type Props = {
  repo: Repository;
};

const Footer = ({ repo }: Props) => {
  const { primaryLanguage, stargazerCount, updatedAt } = repo;
  return (
    <Grid
      container
      gap={1}
      alignItems="center"
      sx={{ color: ({ palette }) => palette.text.tertiary, fontSize: '0.7rem' }}
    >
      <PrimaryLanguage primaryLanguage={primaryLanguage} />
      <Grid>·</Grid>
      <StarsCount count={stargazerCount} />
      <Grid>·</Grid>
      <Grid>{updatedAt}</Grid>
    </Grid>
  );
};

export default Footer;
