import { useEffect, useState } from "react";
import api from "../services/api";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresReponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    api
      .get<FetchGenresReponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
};

export default useGenres;
