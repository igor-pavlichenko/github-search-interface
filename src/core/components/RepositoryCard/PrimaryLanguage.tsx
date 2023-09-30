import { Box, Grid } from '@mui/joy';

import { Repository } from '~/core/api/graphql/searchRepositoriesQuery';

type Props = Pick<Repository, 'primaryLanguage'>;

const PrimaryLanguage = ({ primaryLanguage }: Props) => {
  return (
    <Grid container alignItems="center" gap="0.3rem">
      <Box sx={{ width: 11, height: 11, borderRadius: '50%', background: primaryLanguage.color }} />
      {primaryLanguage.name}
    </Grid>
  );
};

export default PrimaryLanguage;
