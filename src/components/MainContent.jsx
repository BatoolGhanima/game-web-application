import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GameHeading } from "./GameHeading";
import store from '../state-managment/store'

const MainContent = () => {
    const selectGenre = store((state) => state.selectGenre);
    const selectPlatform = store((state) => state.selectPlatform);
    const selectSortOrder = store((state) => state.selectSortOrder)
    return (
        <>
  
            <div className="main-content col-span-5">
                <GameHeading selectGenre={selectGenre} selectPlatform={selectPlatform} />
                <div className="filter my-3">
                    <PlatformSelector />
                    <SortSelector />
                </div>
                <div className="cover-card">
                    <GameList  />
                </div>
            </div>
        </>
    );
};

export default MainContent;
