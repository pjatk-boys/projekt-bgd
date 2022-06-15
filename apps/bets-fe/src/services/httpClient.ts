import axios from "axios";
import { configure, makeUseAxios } from "axios-hooks";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});

export const useAxios = makeUseAxios({
  axios: axiosInstance,
});
