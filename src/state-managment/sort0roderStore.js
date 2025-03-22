import { create } from 'zustand';

const useSortOrderStore = create((set) => ({
  selectSortOrder: '',
  setSelectSortOrder: (order) => set({ selectSortOrder: order }),
}));

export default useSortOrderStore;
