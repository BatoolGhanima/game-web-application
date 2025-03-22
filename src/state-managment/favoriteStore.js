import { create } from "zustand";

const useFavoriteStore = create((set) => ({
    favorites: [],

    addFavorite: (game) => set((state) => {
        if (state.favorites.some(fav => fav.id === game.id)) return state;
        return { favorites: [...state.favorites, game] };
    }),

    removeFavorite: (id) => set((state) => ({
        favorites: state.favorites.filter(game => game.id !== id),
    })),
}));
export default useFavoriteStore