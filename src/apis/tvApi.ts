import { search, tv } from "./apiTypes";
import axiosInstance from "./axiosInstance";

export const api_tv_latest      = () => axiosInstance.get(`${tv}/latest`);

export const api_tv_airingToday = () => axiosInstance.get(`${tv}/airing_today`);

export const api_tv_onTheAir    = () => axiosInstance.get(`${tv}/on_the_air`);

export const api_tv_popular     = () => axiosInstance.get(`${tv}/popular`);

export const api_tv_topRated    = () => axiosInstance.get(`${tv}/top_rated`);

export const api_tv_detail      = (tvId: string) => axiosInstance.get(`${tv}/${tvId}`);

export const api_tv_similar     = (tvId: string) => axiosInstance.get(`${tv}/${tvId}/similar`);

export const api_tv_search      = (query: string) => axiosInstance.get(`${search}/tv?query=${query}`);

