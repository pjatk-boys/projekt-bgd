import Axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
});
