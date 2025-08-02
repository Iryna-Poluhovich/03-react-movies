import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const { data } = await axios.get<FetchMoviesResponse>(API_URL, config);
  return data.results;
};