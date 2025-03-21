import { create } from "zustand"
const store = create((set) =>( {
    selectGenre: null,
    selectPlatform: null,
    selectSortOrder: '',
    searchText: '',
    theme: localStorage.getItem("theme") || "light",
    setSelectGenre:(gener)=>set({selectGenre:gener})   ,           
    setSelectPlatform:(platform)=>set({selectPlatform:platform})  ,            
    setSelectSortOrder:(order)=>set({selectSortOrder:order})    ,          
    setSearchText: (text) => set({ searchText: text }),
    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === 'dark');
        return {theme:newTheme}

    })
}))
export default store;