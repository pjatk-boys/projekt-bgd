import EventCard, {
  ErrorEventCard,
  SkeletonEventCard,
} from "features/eventsList/components/EventCard/EventCard.component";
import { getEvents } from "services/events.service";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import { EventSearch } from "features/eventsList/components/EventSearch/EventSearch.component";
import { EventSortSelect } from "features/eventsList/components/EventSortSelect/EventSortSelect.component";
import { OrderByModel } from "models/orderBy.d";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState<OrderByModel>(
    OrderByModel["DATE_DESC"]
  );

  const { data, isError, isLoading } = useQuery(
    ["events", { query, orderBy }],
    ({ signal }) => getEvents({ query, orderBy, signal })
  );

  return (
    <div>
      <Flex gap={4} mb={4}>
        <EventSearch query={query} setQuery={setQuery} />
        <EventSortSelect
          flexShrink={2}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
      </Flex>
      {isError && <ErrorEventCard />}
      {isLoading &&
        [...Array(4)].map((_, i) => <SkeletonEventCard key={i} index={i} />)}
      {data?.map((e) => (
        <EventCard event={e} key={e.id} />
      ))}
    </div>
  );
};

export default Home;
