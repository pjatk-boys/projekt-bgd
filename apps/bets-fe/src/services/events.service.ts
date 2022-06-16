import { OrderByModel } from "models/orderBy.d";
import { axiosInstance } from "./httpClient";

type GetEventsArgs = {
  query?: string;
  orderBy?: OrderByModel;
  signal?: AbortSignal;
};

/**
 * This function fetches a list of events from the BE
 */
export const getEvents = ({ orderBy, query, signal }: GetEventsArgs = {}) => {
  let url = "/events";

  if (orderBy) {
    url += `/${orderBy}`;
  }

  if (query) {
    url += `/${query}`;
  }

  return axiosInstance
    .get<DetailedEventModel[]>(url, { signal })
    .then((res) => res.data);
};
