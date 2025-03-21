import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Emoji } from "./Emoji";
import './tailwindcard.css' 


import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <img className=" rounded-lg w-full p-2 h-60  transition-all" src={getCroppedImageUrl(game.background_image)} alt="" />
            </a>
            <div className="p-5 mb-2">
                <div className="flex justify-between items-center relative">
                    <div className="platform border border-none p-2 rounded-xl absolute bottom-6 left-[50%] translate-x-[-50%] bg-white dark:bg-gray-800 ">
                        <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
                    </div>
                    <div className="score">
                        <CriticScore score={game.metacritic} />
                    </div>
                </div>
                <a href="#">
                    <h5 >
                        {game.name} <Emoji rating={game.rating_top} />{" "}
                    </h5>
                </a>
            </div>
        </div>
    );
};

export default GameCard;
