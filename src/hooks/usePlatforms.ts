import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "./useData";
import api from "../services/api";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      api
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
