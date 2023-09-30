import { gql } from '@apollo/client';

export function getSearchQuery(input: string) {
  return `${input} in:name`;
}

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($searchQuery: String!) {
    search(type: REPOSITORY, first: 25, query: $searchQuery) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          stargazerCount
          description
          updatedAt
          url
          openGraphImageUrl
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 5) {
            nodes {
              topic {
                name
              }
            }
          }
          owner {
            login
            avatarUrl
          }
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
`;

export type Repository = {
  id: string;
  name: string;
  stargazerCount: number;
  description: string;
  updatedAt: string;
  url: string;
  openGraphImageUrl: string;
  primaryLanguage?: {
    name: string;
    color: string;
  };
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
  owner: {
    login: string;
    avatarUrl: string;
  };
  readme?: {
    text: string;
  };
};

export type SearchRepositoriesResponse = {
  search: {
    nodes: Array<Repository>;
    repositoryCount: number;
  };
};
