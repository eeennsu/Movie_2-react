import { movie, search } from "./apiTypes";
import axiosInstance from "./axiosInstance";

export const api_movie_latest      = () => axiosInstance.get(`${movie}/latest`);

export const api_movie_upcoming    = () => axiosInstance.get(`${movie}/upcoming`);

export const api_movie_nowPlaying  = () => axiosInstance.get(`${movie}/now_playing`);

export const api_movie_topRated    = () => axiosInstance.get(`${movie}/top_rated`);

export const api_movie_popular     = () => axiosInstance.get(`${movie}/popular`);

export const api_movie_detail      = (movieId: string) => axiosInstance.get(`${movie}/${movieId}`);

export const api_movie_similar     = (movieId: string) => axiosInstance.get(`${movie}/${movieId}/similar`);

export const api_movie_search      = (query: string) => axiosInstance.get(`${search}/movie?query=${query}`);

export const api_movie_translation = (movieId: string) => axiosInstance.get(`${movie}/${movieId}/translations`);