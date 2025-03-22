import { create } from 'zustand';

const useSearchTextStore = create((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
}));

export default useSearchTextStore;
