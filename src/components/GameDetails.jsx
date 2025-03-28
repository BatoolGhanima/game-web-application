import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import '../styles/gameDetailsStyle.css'
import DataError from "./DataError";
import Loading from "./Loading";
import PlatformIconList from "./PlatformIconList";

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

    const { data: screenshots, } = useQuery(
        {
            queryKey: ["screenshots", id],
            queryFn: async () => {
                const response = await apiClient.get(`/games/${id}/screenshots`);
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

                <div className="whole-container">


                    <div className="details-container">
                        <Link to={'/'}> <p className="text-nowrap">← back to home</p> </Link>
                        <div className="left-details">
                            <div className="under-tape"></div>
                            <div className="details-image">
                                <img src={game.background_image} alt={game.name} />
                            </div>
                        </div>

                        <div className="right-details">
                            <h1> {game.name} </h1>
                            <h2> Rating :
                                        
                            {Array(Math.floor(game.rating))
                                    .fill(0)
                                    .map((_, index) => (
                                        <span className="text-yellow-500 text-lg" key={index}> ★</span>
    
                                    ))
                                }
                               
                            </h2>
                            <h2> Metacrtic Rating : <span> {game.metacritic}</span></h2>
                            <h2> Released : <span> {game.released}</span></h2>
                            <h2> Play Time : <span> {game.playtime} h </span></h2>
                            <h2> For Age : <span> {game.esrb_rating ? game.esrb_rating.name : "Not Available"} </span></h2>
                            <h2> Comunity Link : <span>  <a href={game.reddit_url}> comnunity link </a> </span></h2>
                            <h2> Game Link : <span> <a href={game.website}></a>game link </span></h2>
                            <h2 className="flex gap-2 items-center "> Platforms :  <span className="bg-white px-1 rounded-2xl">   <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} /> </span></h2>

                        </div>
                    </div>
                    <div className="about">
                        <h2> About </h2>
                        <p> {game.description.replace(/<\/?[^>]+(>|$)/g, "")} </p>
                    </div>

                    <div className="screenshots-container">
                        <h2 className="text-center text-white text-2xl mt-5">Screenshots</h2>
                        <div className="screenshots-grid">
                            {screenshots?.results?.map((screenshot) => (
                                <img key={screenshot.id} src={screenshot.image} alt={`Screenshot ${screenshot.id}`} className="screenshot-img" />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default GameDetails