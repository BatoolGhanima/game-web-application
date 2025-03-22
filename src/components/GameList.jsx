import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGenreStore from '../state-managment/genreStore'
import usePlatformStore from '../state-managment/platformStore'
import useSortOrderStore from '../state-managment/sort0roderStore'
import useSearchTextStore from '../state-managment/searchStore'
import DataError from "./DataError";
import '../styles/gameListStyle.css'
import Loading from "./Loading";

//show game list in the home page and when selece or search for  a game
const GameList = () => {

//get selected genre, platform, sort order and search text from state to filter the games
    const selectPlatform = usePlatformStore((state) => state.selectPlatform)
    const selectSortOrder = useSortOrderStore((state) => state.selectSortOrder)
    const searchText = useSearchTextStore((state) => state.searchText);
    const selectGenre = useGenreStore((state) => state.selectGenre)


    //get data from useGame
    const { data, isError, isLoading } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (isLoading)
       return <div className="mt-32">  <Loading></Loading></div>;


    if (isError)
      return <DataError error={isError}></DataError>


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
