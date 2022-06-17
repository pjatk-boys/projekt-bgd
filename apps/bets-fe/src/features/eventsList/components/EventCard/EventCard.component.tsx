import {
  Badge,
  Box,
  Button,
  Flex,
  FlexProps,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { QuestionIcon, WarningIcon } from "@chakra-ui/icons";
import { getDisciplineIcon } from "features/eventsList/helpers/getDisciplineIcon.helper";
import {
  DisciplineName,
  OddsBadge,
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
    created_at,
    surebet,
    description,
    location,
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
        <Subtitle>{new Date(created_at).toLocaleString()}</Subtitle>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">{home_team}</Text>
          <Text fontWeight="bold">{away_team}</Text>
        </Box>
        <Flex>
          <Flex flexDir="column" alignItems="center">
            <Subtitle mb="2">Home win</Subtitle>
            <OddsBadge fontSize="md">{surebet.home_win.toFixed(2)}</OddsBadge>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Subtitle mb="2">Draw</Subtitle>
            <OddsBadge fontSize="md">{surebet.draw.toFixed(2)}</OddsBadge>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Subtitle mb="2">Away win</Subtitle>
            <OddsBadge fontSize="md">{surebet.away_win.toFixed(2)}</OddsBadge>
          </Flex>
        </Flex>
        <Badge
          borderRadius={4}
          fontSize="lg"
          colorScheme="green"
          variant="solid"
        >
          {`${surebet.value * 100}%`}
        </Badge>
      </Flex>
      {detailed && (
        <>
          <Subtitle mt="2" align="center">
            Location:
          </Subtitle>
          <Text align="center">{location}</Text>
          <Subtitle mt="2" align="center">
            Description:
          </Subtitle>
          <Text align="center">{description}</Text>
          <Button mt="2" as={Link} to="/">
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
