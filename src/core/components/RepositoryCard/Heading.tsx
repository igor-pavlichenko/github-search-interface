import { Grid, Link, Typography } from '@mui/joy';

import { Repository } from '~/core/api/graphql/searchRepositoriesQuery';

import FavoriteButton from './FavoriteButton';

type Props = {
  repo: Repository;
};

const Heading = ({ repo }: Props) => {
  const { owner, name, description } = repo;

  return (
    <Grid container justifyContent="space-between" wrap="nowrap">
      <Grid xs={10} container direction="column" gap="0.2rem">
        <Grid container gap="0.2rem" alignItems="center" wrap="nowrap">
          <img width={20} height={20} style={{ borderRadius: 5 }} src={owner.avatarUrl} />
          <Link>
            <Typography fontWeight={600}>{`${owner.login}/${name}`}</Typography>
          </Link>
        </Grid>
        <Typography fontSize="0.9rem" textAlign="start">
          {description}
        </Typography>
      </Grid>

      <Grid xs="auto" container justifyContent="flex-end" alignItems="baseline">
        <FavoriteButton repo={repo} />
      </Grid>
    </Grid>
  );
};

export default Heading;
