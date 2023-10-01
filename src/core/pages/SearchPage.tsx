import { useQuery } from '@apollo/client';
import { Alert, Box, Input, LinearProgress, Stack } from '@mui/joy';
import { useEffect, useState } from 'react';
import { RxExclamationTriangle, RxMagnifyingGlass } from 'react-icons/rx';

import {
  getSearchQuery,
  SEARCH_REPOSITORIES,
  SearchRepositoriesResponse,
} from '../api/graphql/searchRepositoriesQuery';
import RepositoryCard from '../components/RepositoryCard/RepositoryCard';
import { useLastSuccessfulSearch } from '../state/lastSuccessfulSearch';

const Search = () => {
  // used to persist search input value between page navigations
  const { lastSearchTerm, updateLastSearchTerm: updateSearchTerm } = useLastSuccessfulSearch();
  const [inputValue, setInputValue] = useState(lastSearchTerm);
  const [debouncedInputValue, setDebouncedInputValue] = useState(lastSearchTerm);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    // kind of a react hack.. not a "real" debounce
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  // ------ GraphQL request -----
  // this would probably be better typed with codegen, but I couldn't make it work
  const { data, previousData, loading, error } = useQuery<SearchRepositoriesResponse>(
    SEARCH_REPOSITORIES,
    {
      // skip: debouncedInputValue === '',
      variables: { searchQuery: getSearchQuery(debouncedInputValue) },
      onCompleted: () => {
        updateSearchTerm(debouncedInputValue);
      },
    },
  );
  const repos = (data || previousData)?.search.nodes ?? [];

  return (
    <>
      <Stack sx={{ width: { xs: '100%', md: '750px' } }} gap="0.2rem">
        <Input
          size="lg"
          startDecorator={<RxMagnifyingGlass className="RadixIcon" />}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Box height="4px">
          {loading && <LinearProgress size="sm" sx={{ width: '100%' }} variant="plain" />}
        </Box>
      </Stack>

      {error ? (
        <Alert
          color="danger"
          variant="outlined"
          startDecorator={<RxExclamationTriangle className="RadixIcon" />}
        >
          {error.message}
        </Alert>
      ) : (
        repos.map((repo) => <RepositoryCard key={repo.id} repo={repo} />)
      )}
    </>
  );
};

export default Search;
