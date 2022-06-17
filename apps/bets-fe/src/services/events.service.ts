import { DetailedEventModel } from "models/events";
import { OrderByModel } from "models/orderBy.d";
import { API_BASE_URL, axiosInstance } from "./httpClient";

type GetEventsArgs = {
  query?: string;
  orderBy?: OrderByModel;
  signal?: AbortSignal;
};

/**
 * This function fetches a list of events from the BE
 */
export const getEvents = ({ orderBy, query, signal }: GetEventsArgs = {}) => {
  const url = new URL(`${API_BASE_URL}/events`);

  if (orderBy) {
    url.searchParams.append("orderBy", orderBy);
  }

  if (query) {
    url.searchParams.append("q", query);
  }

  return axiosInstance
    .get<DetailedEventModel[]>(url.href, { signal })
    .then((res) => res.data);
};
