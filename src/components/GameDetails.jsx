import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


const GameDetails = () => {
    const { id } = useParams();

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
        return <p className="text-center text-gray-600 text-lg mt-10">Loading...</p>;
    if (error)
        return (
            <p className="text-center text-red-500 text-lg mt-10">
                Error: {error.message}
            </p>
        );


    return (
        <>

            <div className="details-container">
                <div className="left-details">
                    <div className="under-tape"></div>
                    <div className="details-image">
                        <img src={game.background_image } alt={game.name} />
                    </div>
                </div>

                <div className="right-details">
                    <h1> {game.name} </h1>
                    <h2> Rating : <span> {game.rating }</span></h2>
                    <h2> Metacrtic Rating : <span> {game.metacritic }</span></h2>
                    <h2> Released : <span> {game.released }</span></h2>
                    <h2> Play Time : <span> {game.playtime } h </span></h2>
                    <h2> For Age : <span> {game.esrb_rating } h </span></h2>
                    <h2> Comunity Link : <span> {game.reddit_url } h </span></h2>
                    <h2> Game Link : <span> {game.website } h </span></h2>
               

                </div>

            </div>


        </>
    )
}

export default GameDetails