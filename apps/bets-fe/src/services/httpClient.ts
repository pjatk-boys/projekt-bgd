import Axios from "axios";
import { makeUseAxios } from "axios-hooks";
import LRU from "lru-cache";

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});
