import { create } from 'zustand';

const usePlatformStore = create((set) => ({
  selectPlatform: null,
  setSelectPlatform: (platform) => set({ selectPlatform: platform }),
}));

export default usePlatformStore;
