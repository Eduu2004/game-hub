import { useQuery } from "@tanstack/react-query";
import { Tariler } from "../entities/Trailer";
import APIClient from "../services/api-client";


const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Tariler>(`/games/${gameId}/movies`);
        return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: apiClient.getAll
    })
} 

export default useTrailers;