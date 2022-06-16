import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});
