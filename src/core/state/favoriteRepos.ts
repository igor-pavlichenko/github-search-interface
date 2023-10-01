import { create } from 'zustand';

import { Repository } from '../api/graphql/searchRepositoriesQuery';

type FavoriteRepoEntry = { id: string; repository: Repository; rating?: number };
interface FavoriteReposState {
  favoriteRepos: Array<FavoriteRepoEntry>;
  addFavorite: (repository: Repository) => void;
  removeFavorite: (repository: Repository) => void;
  rateFavorite: (repository: Repository, rating: number) => void;
}

export const useFavoriteRepos = create<FavoriteReposState>()((set) => ({
  favoriteRepos: [],
  addFavorite: (repository) =>
    set((state) => {
      return { favoriteRepos: [{ id: repository.id, repository }, ...state.favoriteRepos] };
    }),
  removeFavorite: (repository) =>
    set((state) => {
      return { favoriteRepos: state.favoriteRepos.filter((repo) => repo.id !== repository.id) };
    }),
  rateFavorite: (repository, rating) =>
    set((state) => {
      const newArray = [...state.favoriteRepos];
      const index = newArray.findIndex((repo) => repo.id === repository.id);
      newArray[index] = { id: repository.id, repository, rating };
      return { favoriteRepos: newArray };
    }),
}));
