import { Button, Grid, Link, Typography } from '@mui/joy';
import { RxStar, RxStarFilled } from 'react-icons/rx';

import { Repository } from '~/core/api/graphql/searchRepositoriesQuery';
import { useFavoriteRepos } from '~/core/state/favoriteRepos';

type Props = {
  repo: Repository;
};

const Heading = ({ repo }: Props) => {
  const { owner, name, description } = repo;
  const { addFavorite, removeFavorite } = useFavoriteRepos();
  const favoriteEntry = useFavoriteRepos((state) =>
    state.favoriteRepos.find((fav) => fav.id === repo.id),
  );
  const isFavorite = !!favoriteEntry;

  return (
    <Grid container justifyContent="space-between" wrap="nowrap">
      <Grid xs={8} sm={10} container direction="column" gap="0.2rem">
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
        <Button
          color="neutral"
          variant="outlined"
          size="sm"
          startDecorator={
            isFavorite ? <RxStarFilled className="RadixIcon" /> : <RxStar className="RadixIcon" />
          }
          onClick={() => (isFavorite ? removeFavorite(repo) : addFavorite(repo))}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Heading;
