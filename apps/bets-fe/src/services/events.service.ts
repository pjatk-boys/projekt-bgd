import { useMemo } from "react";
import { useAxios } from "./httpClient";

type GetEventsArgs = {
  query?: string;
  orderBy?: OrderByModel;
};

/**
 * This function fetches a list of events from the BE
 */
export const useGetEvents = ({ orderBy, query }: GetEventsArgs = {}) => {
  const url = useMemo(() => {
    let url = "/events";

    if (orderBy) {
      url += `/${orderBy}`;
    }

    if (query) {
      url += `/${query}`;
    }

    return url;
  }, [orderBy, query]);

  return useAxios<DetailedEventModel[]>(url);
};
