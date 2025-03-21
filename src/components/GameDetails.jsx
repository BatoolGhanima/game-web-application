import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import axios from "axios";

const GameDetails = () => {
    const { id } = useParams();
    const featchDetails = async (id) => {
        const response = await apiClient.get(`/games/${id}`);
        return response.data;
    }
    const { data, isLoading, error } = useQuery(
        {
            queryKey: ["games", id],
            queryFn: featchDetails(id)
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
      
      
      </>
  )
}

export default GameDetails