import { Button, IconButton } from '@mui/joy';
import { RxStar, RxStarFilled } from 'react-icons/rx';

import { Repository } from '~/core/api/graphql/searchRepositoriesQuery';
import { useFavoriteRepos } from '~/core/state/favoriteRepos';

type Props = {
  repo: Repository;
};

/**
 * Renders a small icon button on small screens
 * and a full text button on normal screens
 */
const FavoriteButton = ({ repo }: Props) => {
  const { addFavorite, removeFavorite } = useFavoriteRepos();
  const favoriteEntry = useFavoriteRepos((state) =>
    state.favoriteRepos.find((fav) => fav.id === repo.id),
  );
  const isFavorite = !!favoriteEntry;

  return (
    <>
      <Button
        color="neutral"
        variant="outlined"
        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
        size="sm"
        startDecorator={
          isFavorite ? <RxStarFilled className="RadixIcon" /> : <RxStar className="RadixIcon" />
        }
        onClick={() => (isFavorite ? removeFavorite(repo) : addFavorite(repo))}
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </Button>
      <IconButton size="sm" variant="outlined" sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        {isFavorite ? <RxStarFilled className="RadixIcon" /> : <RxStar className="RadixIcon" />}
      </IconButton>
    </>
  );
};

export default FavoriteButton;
