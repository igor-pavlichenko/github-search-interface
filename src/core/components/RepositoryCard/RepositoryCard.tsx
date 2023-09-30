import { Chip, Sheet, Stack } from '@mui/joy';

import { Repository } from '../../api/graphql/searchRepositoriesQuery';
import Footer from './Footer';
import Heading from './Heading';

type Props = { repo: Repository };

const RepositoryCard = ({ repo }: Props) => {
  const { repositoryTopics } = repo;
  return (
    <Sheet
      variant="outlined"
      sx={{ width: { xs: '100%', sm: '600px' }, borderRadius: 5, padding: 2 }}
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
