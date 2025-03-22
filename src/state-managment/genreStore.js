import { create } from 'zustand';

const useGenreStore = create((set) => ({
  selectGenre: null,
  setSelectGenre: (genre) => set({ selectGenre: genre }),
}));

export default useGenreStore;
