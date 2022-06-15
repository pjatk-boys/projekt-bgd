import EventCard, {
  ErrorEventCard,
  SkeletonEventCard,
} from "features/eventsList/components/EventCard/EventCard.component";
import { useGetEvents } from "services/events.service";
import { mockedEventsList } from "__mocks__/events.mock";

const Home = () => {
  const [{ data, loading, error }] = useGetEvents();

  return (
    <div>
      {error && <ErrorEventCard />}
      {loading &&
        [...Array(4)].map((_, i) => (
          <SkeletonEventCard key={i} opacity={1.2 - i / 5} />
        ))}
      {mockedEventsList?.map((e) => (
        <EventCard event={e} key={e.id} />
      ))}
    </div>
  );
};

export default Home;
