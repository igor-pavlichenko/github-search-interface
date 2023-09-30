import { Button, Grid, Link, Stack, Typography } from '@mui/joy';
import { RxStar } from 'react-icons/rx';

import { Repository } from '~/core/api/graphql/searchRepositoriesQuery';

type Props = {
  repo: Repository;
};

const Heading = ({ repo }: Props) => {
  const { owner, name, description } = repo;

  return (
    <Grid container justifyContent="space-between" wrap="nowrap">
      <Stack gap="0.2rem">
        <Grid container gap="0.2rem" alignItems="center">
          <img width={20} height={20} style={{ borderRadius: 5 }} src={owner.avatarUrl} />
          <Link>
            <Typography fontWeight={600}>{`${owner.login}/${name}`}</Typography>
          </Link>
        </Grid>
        <Typography fontSize="0.9rem" textAlign="start">
          {description}
        </Typography>
      </Stack>

      <Grid xs={3} container justifyContent="flex-end" alignItems="baseline">
        <Button
          color="neutral"
          variant="outlined"
          size="sm"
          startDecorator={<RxStar className="RadixIcon" />}
        >
          Favorite
        </Button>
      </Grid>
    </Grid>
  );
};

export default Heading;
