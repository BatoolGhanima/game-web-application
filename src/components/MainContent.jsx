import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GameHeading } from "./GameHeading";
import useGenreStore from '../state-managment/genreStore'
import usePlatformStore from '../state-managment/platformStore'
import '../styles/mainContentStyle.css'
import SideBar from './SideBar'
 
//main content component to show game list and filter options
const MainContent = () => {
    const selectGenre = useGenreStore((state) => state.selectGenre);
    const selectPlatform = usePlatformStore((state) => state.selectPlatform);
    return (
        <>

            <div className="main-content">
                <div className="ovelay-main-content">

                {/* call the game heading component to show the selected genre and platform */}
                    <div className="">
                        <GameHeading selectGenre={selectGenre} selectPlatform={selectPlatform} />
                        <div className="filter ">
                            {/* call platform and genre */}
                            <PlatformSelector />
                            <SortSelector />
                        </div>
                    </div>
                    <SideBar></SideBar>
                    <div className="cover-card m-0 p-0">
                        <GameList />
                    </div>
                </div>  </div>
        </>
    );
};

export default MainContent;
