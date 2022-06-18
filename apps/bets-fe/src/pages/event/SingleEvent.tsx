import EventCard, {
  ErrorEventCard,
  ErrorEventType,
  SkeletonEventCard,
} from "features/eventsList/components/EventCard/EventCard.component";
import { getEvent } from "services/events.service";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import { EventSearch } from "features/eventsList/components/EventSearch/EventSearch.component";
import { EventSortSelect } from "features/eventsList/components/EventSortSelect/EventSortSelect.component";
import { OrderByModel } from "models/orderBy.d";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SingleEventPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isLoading } = useQuery(
    [`event-${id}`, { id }],
    ({ signal }) => getEvent({ id, signal })
  );

  return (
    <div>
      {isError && <ErrorEventCard type={ErrorEventType.NO_EVENT} />}
      {isLoading && <SkeletonEventCard index={0} />}
      {data && <EventCard event={data} detailed />}
    </div>
  );
};

export default SingleEventPage;
