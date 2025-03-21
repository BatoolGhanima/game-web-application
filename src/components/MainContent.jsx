import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GameHeading } from "./GameHeading";
import store from '../state-managment/store'
import '../styles/mainContentStyle.css'
import SideBar from './SideBar'
const MainContent = () => {
    const selectGenre = store((state) => state.selectGenre);
    const selectPlatform = store((state) => state.selectPlatform);
    const selectSortOrder = store((state) => state.selectSortOrder)
    return (
        <>
  
            <div className="main-content">
                <div className="ovelay-main-content">

               
                <div className="">
                    <GameHeading selectGenre={selectGenre} selectPlatform={selectPlatform} />
                <div className="filter ">
                    <PlatformSelector />
                    <SortSelector />
                </div>  
                </div>
              <SideBar></SideBar>
                <div className="cover-card m-0 p-0">
                    <GameList  />
                </div>
           </div>  </div>
        </>
    );
};

export default MainContent;
