import { api, BackendApiResponse, FetchOptions } from "@/lib/common/api";

// Type definitions based on the API response structure
export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
}

export interface Actor {
  id: string;
  name: string;
  slug: string;
  gender: string;
  profile_path: string;
}

export interface MovieInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  actor: Actor[];
  director: string[];
  slug: string;
  content: string;
  origin_name: string;
  type: "series" | "single";
  status: "completed" | "ongoing" | "upcoming";
  thumb_url: string;
  poster_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  year: number;
  view: number;
  category: Category[];
  country: Country[];
}

export const getMoviesSuggest = async () => {
  try {
    const res = await api.get<BackendApiResponse<MovieInfo>>(
      `api/movies/suggest`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieBySlug = async (slug: string) => {
  try {
    const res = await api.get<BackendApiResponse<MovieInfo>>(
      `api/movies/${slug}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieBySuggest = async () => {
  try {
    const res = await api.get<BackendApiResponse<MovieInfo[]>>(
      `api/movies/suggest`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieUpcoming = async () => {
  try {
    const res = await api.get<BackendApiResponse<MovieInfo[]>>(
      `api/movies/upcoming`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
