import { useQuery } from '@apollo/client';
import { Autocomplete, Sheet } from '@mui/joy';
import { RxMagnifyingGlass } from 'react-icons/rx';

import {
  getSearchQuery,
  SEARCH_REPOSITORIES,
  SearchRepositoriesResponse,
} from '../api/graphql/searchRepositoriesQuery';

const Search = () => {
  // this would probably be better typed with codegen
  const { data, loading, error, refetch } = useQuery<SearchRepositoriesResponse>(
    SEARCH_REPOSITORIES,
    {
      // this would probably be better typed with codegen
      variables: { searchQuery: getSearchQuery('prettier') },
    },
  );

  const repos = data?.search.nodes ?? [];

  return (
    <>
      <Autocomplete
        size="lg"
        sx={{ width: { xs: '100%', sm: '600px' } }}
        startDecorator={<RxMagnifyingGlass className="RadixIcon" />}
        options={repos.map((r) => `${r.owner.login}/${r.name}`)}
      />

      {repos.map((repo) => {
        const { id, owner, name, stargazerCount, primaryLanguage, openGraphImageUrl } = repo;
        return (
          <Sheet
            key={id}
            variant="outlined"
            sx={{ width: { xs: '100%', sm: '600px' }, borderRadius: 4 }}
          >
            {`${owner.login}/${name}`}
          </Sheet>
        );
      })}
    </>
  );
};

export default Search;
