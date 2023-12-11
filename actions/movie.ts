"use server";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchMovies = async () => {
  const { data: NetflixOriginal } = await instance.get(`/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`);
  const { data: Top } = await instance.get(`/discover/tv?api_key=${process.env.API_KEY}&languager=en-us`);
  const { data: Comedy } = await instance.get(`/discover/tv?api_key=${process.env.API_KEY}&with_genres=35`);
  const { data: Romantic } = await instance.get(`/discover/tv?api_key=${process.env.API_KEY}&with_genres=10749`);
  const { data: Documentary } = await instance.get(`/discover/tv?api_key=${process.env.API_KEY}&with_genres=99`);
  return {
    NetflixOriginal,
    Top,
    Comedy,
    Romantic,
    Documentary,
  };
};

export const fetchBanner = async () => {
  const { data } = await instance.get(`/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`);
  return data.results[Math.floor(Math.random() * data.results.length - 1)];
};

export const fetchTrailer = async (id: string) => {
  const { data } = await instance.get(`/tv/${id}/videos?api_key=${process.env.API_KEY}`);
  return data.results[0]?.key;
};
