import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = (endpoint, requestConfig, queryKeyOverride) => {
  const queryKey = queryKeyOverride ? [queryKeyOverride] : [endpoint, requestConfig];

  const { data, error, isLoading, isError } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      try {
        const response = await apiClient.get(endpoint, requestConfig);

        if (!response.data || !response.data.results) {
            // Handle cases where the API response is malformed
            throw new Error("Malformed API response: missing data or results");
        }

        return response.data.results;
      } catch (err) {
        if (err instanceof CanceledError) {
          
          throw err;
        }
        throw err;
      }
    },
    retry: false,
  });

  return { data, error, isLoading, isError };
};

export default useData;