import { Grid, Stack, useTheme } from '@mui/joy';
import { useCallback } from 'react';
import { RxStar, RxStarFilled } from 'react-icons/rx';
import { Rating } from 'react-simple-star-rating';

import { Repository } from '../api/graphql/searchRepositoriesQuery';
import RepositoryCard from '../components/RepositoryCard/RepositoryCard';
import { useFavoriteRepos } from '../state/favoriteRepos';

const FavoritesPage = () => {
  const { favoriteRepos, rateFavorite } = useFavoriteRepos();
  const { palette } = useTheme();

  const handleRatingChange = useCallback(
    (repo: Repository, rating: number) => {
      rateFavorite(repo, rating);
    },
    [rateFavorite],
  );

  if (favoriteRepos.length === 0) return <div>No favorite repositories yet...</div>;

  return (
    <Stack marginTop={7} gap={3}>
      {favoriteRepos.map((favoriteEntry) => (
        <Grid
          container
          direction="column"
          key={favoriteEntry.id}
          width="100%"
          alignItems="flex-end"
        >
          <Grid marginRight={2}>
            <Rating
              initialValue={favoriteEntry.rating ?? 0}
              emptyIcon={<RxStar className="RadixIcon" />}
              emptyColor={palette.text.icon}
              fillIcon={<RxStarFilled className="RadixIcon" />}
              fillColor={palette.text.icon}
              onClick={(rating) => handleRatingChange(favoriteEntry.repository, rating)}
            />
          </Grid>
          <RepositoryCard key={favoriteEntry.id} repo={favoriteEntry.repository} />
        </Grid>
      ))}
    </Stack>
  );
};

export default FavoritesPage;
