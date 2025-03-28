import useFavoriteStore from "../state-managment/favoriteStore";
import { FaHeart } from "react-icons/fa";
import '../styles/favorite.css'
import { Link, useNavigate } from "react-router-dom";

const Favorite = () => {
    const favorites = useFavoriteStore(state => state.favorites);
    const removeFavorite = useFavoriteStore(state => state.removeFavorite);
    console.log(favorites)

    //use navigate to navigate to game details page

  const navigate = useNavigate();
    return (

      <>
     

            <div className="whole-favorite">
                
      
            <div className="favorite-container">
                <Link to={'/'}> <p>← back to home</p> </Link>
            <h1 >My Favorite Games</h1>
            {favorites.length === 0 ? (
                <div>You didn't add anything</div>
            ) : (
                <div>
                    {
                        favorites.map((game) => (
                            <div key={game.id} className="favorite-item">
                                <img src={game.background_image} alt={game.name} onClick={()=>navigate(`/game/${game.id}`)} />
                                <div className="fav-title">
                                    <h2>{game.name}</h2>
                                    <button onClick={() => removeFavorite(game.id)} className=''>
                                      <span><FaHeart /> </span>  
                                    </button>
                                </div>

                            </div>
                        ))
                    }
                </div>

            )}

        </div>


        </div>
        </> );
};

export default Favorite;
