import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchDataResponse } from "./useData";
import api from "../services/api";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      api
        .get<FetchDataResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
