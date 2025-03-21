import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Emoji } from "./Emoji";

import { Link } from "react-router-dom";

import PlatformIconList from "./PlatformIconList";
import { useNavigate } from "react-router-dom";
import '../styles/gameCardStyle.css'
const GameCard = ({ game }) => {
    const navigate = useNavigate();
    return (


        <>

            <div className="card-container">
                <Link to={'./'}> <img src={getCroppedImageUrl(game.background_image)} alt="" className="image-card " /> </Link>
                <h1>  {game.name} </h1>

                <div className="card-overlay">

                    <div className="icons">
                        <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />

                    </div>
                    {/* end of icons */}



                    <div className="disc">
                        <p>
                            {game.name}
                            <p className="font-semibold">
                                {game.released}
                            </p>
                        </p>
                        <div className="score">
                            <CriticScore score={game.metacritic} /> <Emoji rating={game.rating_top} />{" "}
                        </div>
                    <button className="card-button" onClick={() => navigate(`/game/${game.id}`)}> show details </button>

                    </div>






                </div>
                {/* end of card-overlay */}


            </div>
            {/* end of card-container */}






            {/* <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
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
                    <button onClick={() => navigate(`/game/${game.id}`)}> show details </button>
                </div>
            </div> */}
        </>);
};

export default GameCard;
