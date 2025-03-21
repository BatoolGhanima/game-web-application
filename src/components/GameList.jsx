import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import store from '../state-managment/store'
import '../styles/gameListStyle.css'

import Loading from "./loading";
const GameList = () => {
    const selectPlatform = store((state)=>state.selectPlatform)
     const selectSortOrder = store((state)=>state.selectSortOrder)
    const searchText = store((state) => state.searchText);
    const selectGenre = store((state) => state.selectGenre)
    
    const { data, isError, isLoading } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (isError)
        return (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">Danger alert!</span> {isError}
            </div>
        );

    return (
        <>
             
                        
                     <div className="game-container">
                {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                
                {data?.map((game) => (
                    
                        <GameCard key={game.id} game={game} /> 
                        
                  
                    
                ))}
            </div>
                
           
        </>
    );
};

export default GameList;
