import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import '../styles/gameDetailsStyle.css'
import DataError from "./DataError";
import Loading from "./loading";

//this component created to show game details
const GameDetails = () => {
    const { id } = useParams();
// useEffect used to get game details from api
    const { data: game, isLoading, error } = useQuery(
        {
            queryKey: ["games", id],
            queryFn: async () => {
                const response = await apiClient.get(`/games/${id}`);
                return response.data;
            }
        }
    )

    if (isLoading)
        return <div className="mt-32">  <Loading></Loading></div>;
    if (error) return <DataError error={error}></DataError>



    return (
        <>
            <div className="whole-page">


                <div className="details-container">
                    <Link to={'/'}> <p>← back to home</p> </Link>
                    <div className="left-details">
                        <div className="under-tape"></div>
                        <div className="details-image">
                            <img src={game.background_image} alt={game.name} />
                        </div>
                    </div>

                    <div className="right-details">
                        <h1> {game.name} </h1>
                        <h2> Rating : <span> {game.rating}</span></h2>
                        <h2> Metacrtic Rating : <span> {game.metacritic}</span></h2>
                        <h2> Released : <span> {game.released}</span></h2>
                        <h2> Play Time : <span> {game.playtime} h </span></h2>
                        <h2> For Age : <span> {game.esrb_rating ? game.esrb_rating.name : "Not Available"} </span></h2>
                        <h2> Comunity Link : <span>  <a href={game.reddit_url}> comnunity link </a> </span></h2>
                        <h2> Game Link : <span> <a href={game.website}></a>game link </span></h2>



                    </div>

                </div>

            </div>
        </>
    )
}

export default GameDetails