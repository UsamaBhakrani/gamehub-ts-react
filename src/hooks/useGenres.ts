import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { FetchDataResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      api.get<FetchDataResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, 
  });
// useData<Genre>("/genres");

export default useGenres;
