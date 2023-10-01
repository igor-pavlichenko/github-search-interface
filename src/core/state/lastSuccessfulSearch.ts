import { create } from 'zustand';

interface LastSuccessfulSearchState {
  lastSearchTerm: string;
  updateLastSearchTerm: (term: string) => void;
}

export const useLastSuccessfulSearch = create<LastSuccessfulSearchState>()((set) => ({
  lastSearchTerm: '',
  updateLastSearchTerm: (term) => set(() => ({ lastSearchTerm: term })),
}));
