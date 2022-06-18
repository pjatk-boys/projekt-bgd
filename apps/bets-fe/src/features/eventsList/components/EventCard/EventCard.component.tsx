import {
  Badge,
  Box,
  Button,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { QuestionIcon, WarningIcon } from "@chakra-ui/icons";
import { getDisciplineIcon } from "features/eventsList/helpers/getDisciplineIcon.helper";
import {
  DisciplineName,
  skeletonAnimation,
  Subtitle,
} from "./EventCard.styles";
import { Link } from "react-router-dom";
import { DetailedEventModel } from "models/events";
import { useMemo } from "react";

type Props = {
  event: DetailedEventModel;
  detailed?: boolean;
};

const EventCard = ({ event, detailed }: Props) => {
  const {
    home_team,
    away_team,
    discipline,
    event_date,
    surebet,
    description,
    location,
    bets,
  } = event;

  const Component = detailed ? Box : Button;

  const props: any = detailed
    ? {}
    : {
        as: Link,
        to: `/event/${event.id}`,
      };

  return (
    <Component
      {...props}
      display="flex"
      bgColor="white"
      p="4"
      mb={4}
      minH={110}
      borderRadius={8}
      flexDir="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Flex alignItems="center" justifyContent="space-between" mb={2}>
        <DisciplineName>
          <Image
            src={getDisciplineIcon(discipline)}
            width="18px"
            height="18px"
            mr={1}
          />
          {discipline}
        </DisciplineName>
        <Subtitle>{new Date(event_date).toLocaleString()}</Subtitle>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Box flexBasis="150px">
          <Text fontWeight="bold">{home_team}</Text>
          <Text fontWeight="bold">{away_team}</Text>
        </Box>
        <Flex gap="3">
          <Flex flexDir="column" alignItems="center">
            <Subtitle mb="2">Home win</Subtitle>
            <Badge fontSize="md">{surebet.home_win.toFixed(2)}</Badge>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Subtitle mb="2">Draw</Subtitle>
            <Badge fontSize="md">{surebet.draw.toFixed(2)}</Badge>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Subtitle mb="2">Away win</Subtitle>
            <Badge fontSize="md">{surebet.away_win.toFixed(2)}</Badge>
          </Flex>
        </Flex>
        <Badge
          borderRadius={4}
          fontSize="lg"
          colorScheme={
            surebet.value > 0 ? "green" : surebet.value === 0 ? "yellow" : "red"
          }
          variant="solid"
        >
          {`${surebet.value > 0 ? "+" : ""}${(surebet.value * 100).toFixed(
            2
          )}%`}
        </Badge>
      </Flex>
      {detailed && (
        <>
          <Subtitle align="center" mt="2">
            Location:
          </Subtitle>
          <Text align="center">{location}</Text>
          <Subtitle mt="2" align="center">
            Description:
          </Subtitle>
          <Text align="center">{description}</Text>
          <Subtitle mt="2" align="center">
            Bet options:
          </Subtitle>
          <Box mx="auto">
            <Flex mt="2">
              <Subtitle w={100}>Bookmaker:</Subtitle>
              <Subtitle w="70px">Home win:</Subtitle>
              <Subtitle w="70px">Away win:</Subtitle>
              <Subtitle w="70px">Draw:</Subtitle>
            </Flex>
            {bets.map((b) => (
              <Box key={b.bookmaker_name}>
                <Text w={100} display="inline-block">
                  {b.bookmaker_name}
                </Text>
                <Box display="inline-block" w="70px">
                  <Badge fontSize="md">{b.home_win.toFixed(2)}</Badge>
                </Box>
                <Box display="inline-block" w="70px">
                  <Badge fontSize="md">{b.draw.toFixed(2)}</Badge>
                </Box>
                <Box display="inline-block" w="70px">
                  <Badge fontSize="md">{b.away_win.toFixed(2)}</Badge>
                </Box>
              </Box>
            ))}
          </Box>
          <Button mt="4" as={Link} to="/">
            Go back to the main page
          </Button>
        </>
      )}
    </Component>
  );
};

type SkeletonEventCardProps = FlexProps & {
  index: number;
};

export const SkeletonEventCard = ({
  index,
  ...flexProps
}: SkeletonEventCardProps) => (
  <Flex
    animation={`${skeletonAnimation} 1.5s cubic-bezier(0,1.14,1,1) ${
      index * 0.3
    }s infinite alternate`}
    bgColor="white"
    p="4"
    mb={4}
    borderRadius={8}
    justifyContent="space-between"
    minH={110}
    opacity={0}
    {...flexProps}
  >
    <Box>
      <Flex alignItems="center">
        <Skeleton width="18px" height="18px" mr={1} />
        <SkeletonText fontWeight="bold" width={70} noOfLines={1} />
      </Flex>
      <SkeletonText width="70px" mt={6} fontWeight="bold" noOfLines={1} />
      <SkeletonText width="100px" mt={4} fontWeight="bold" noOfLines={1} />
    </Box>
  </Flex>
);

export enum ErrorEventType {
  SERVER_ERROR = "server_error",
  NO_RESULTS = "no_results",
  NO_EVENT = "no_event",
}

type ErrorEventCardProps = {
  type: ErrorEventType;
};

export const ErrorEventCard = ({ type }: ErrorEventCardProps) => {
  const component = useMemo(() => {
    switch (type) {
      case ErrorEventType.SERVER_ERROR:
        return (
          <>
            <WarningIcon mb={2} />
            <Text>Ooops, there was a server error.</Text>
            <Text>Please try again later</Text>
          </>
        );
      case ErrorEventType.NO_RESULTS:
        return (
          <>
            <QuestionIcon mb={2} />
            <Text>No results found</Text>
            <Text>Did you input the full name of a team?</Text>
          </>
        );
      case ErrorEventType.NO_EVENT:
        return (
          <>
            <WarningIcon mb={2} />
            <Text>Ooops, there is no event here.</Text>
            <Text>Are you sure the id is correct?</Text>
          </>
        );
    }
  }, []);

  return (
    <Flex
      borderWidth={2}
      borderStyle="dashed"
      borderColor="white"
      p="4"
      mb={4}
      borderRadius={8}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH={110}
      color="white"
    >
      {component}
    </Flex>
  );
};

export default EventCard;
