import { Chip, Sheet, Stack } from '@mui/joy';

import { useFavoriteRepos } from '~/core/state/favoriteRepos';

import { Repository } from '../../api/graphql/searchRepositoriesQuery';
import Footer from './Footer';
import Heading from './Heading';

type Props = { repo: Repository };

const RepositoryCard = ({ repo }: Props) => {
  const { repositoryTopics } = repo;
  const favoriteEntry = useFavoriteRepos((state) =>
    state.favoriteRepos.find((fav) => fav.id === repo.id),
  );
  const isFavorite = !!favoriteEntry;
  return (
    <Sheet
      variant="outlined"
      sx={{
        width: { xs: '100%', md: '700px' },
        borderRadius: 5,
        backgroundColor: ({ palette }) => (isFavorite ? palette.background.level1 : undefined),
        borderColor: ({ palette }) => (isFavorite ? palette.text.primary : undefined),
        padding: 2,
      }}
    >
      <Stack gap="0.5rem" justifyContent="flex-start">
        <Heading repo={repo} />
        <Stack direction="row" gap="0.2rem" flexWrap="wrap">
          {repositoryTopics.nodes.map((topic) => (
            <Chip size="sm" variant="soft" key={topic.topic.name}>
              {topic.topic.name}
            </Chip>
          ))}
        </Stack>
        <Footer repo={repo} />
      </Stack>
    </Sheet>
  );
};

export default RepositoryCard;
