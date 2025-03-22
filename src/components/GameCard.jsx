
// Import components and style
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Emoji } from "./Emoji";
import { Link, useNavigate } from "react-router-dom";
import PlatformIconList from "./PlatformIconList";
import '../styles/gameCardStyle.css'
import useFavoriteStore from "../state-managment/favoriteStore";
import { FaHeart } from "react-icons/fa";
import { useEffect } from "react";
import Favorite from "./Favorite";

// GameCard component that displays individual game information in a card format
// Accepts a game object as a prop containing game details
const GameCard = ({ game }) => {
    // Hook for programmatic navigation
    const navigate = useNavigate();
    
    // Get favorite-related functions and state from the favorite store
    const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
    // Check if the current game is in favorites
    const isFavorite = favorites.some(fav => fav.id === game.id);

    // Handler for toggling favorite status of a game
    const handleFavoriteToggle = () => {
        if (isFavorite) {
            removeFavorite(game.id);
        } else {
            addFavorite(game);
        }
    };

    // Effect hook to log favorites whenever they change (for debugging)
    useEffect(() => {
        console.log("Favorites updated:", favorites);
    }, [favorites]);

    return (
        <>

            <div className="card-container">
                <div className="inner-container">
                    {/* Front face of the card showing basic game information */}
                    <div className="front-card">
                        {/* Game image with link */}
                        <Link to={'./'}> 
                            <img src={getCroppedImageUrl(game.background_image)} alt="" className="image-card " /> 
                        </Link>
                        <h1>{game.name}</h1>

                        <div className="card-overlay">
                            {/* Platform icons section */}
                            <div className="icons">
                                <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
                            </div> {/* /icons */}

                            {/* Game description section */}
                            <div className="disc">
                                <p>
                                    {game.name}
                                    <p className="font-semibold">
                                        {game.released}
                                    </p>
                                </p>

                                {/* Game ratings section */}
                                <div className="score">
                                    <CriticScore score={game.metacritic} /> 
                                    <Emoji rating={game.rating_top} />
                                </div> {/* /score */}
                            </div> {/* /disc */}
                        </div> {/* /card-overlay */}
                    </div> {/* front-card */}

                    <div className="back-card">
                        <img src={getCroppedImageUrl(game.background_image)} alt="" className="image-card " />
                        <h1>{game.name}</h1>
                        <div className="card-overlay">
                            {/* Favorite toggle button */}
                            <button
                                className={`p-2 ${isFavorite ? "text-red-500" : "text-white"} `}
                                onClick={handleFavoriteToggle}
                            >
                                <FaHeart size={24} onClick={() => console.log(favorites)} />
                            </button>

                            {/* Navigation button to game details */}
                            <button 
                                className="card-button" 
                                onClick={() => { navigate(`/game/${game.id}`) }}
                            > 
                                show details 
                            </button>
                        </div> {/* /card-overlay */}
                    </div> {/* /back-card */}
                </div> {/* /inner-container */}
            </div> {/* card-container */}
        </>
    );
};

export default GameCard;
