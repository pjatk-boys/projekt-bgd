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
import { WarningIcon } from "@chakra-ui/icons";
import { getDisciplineIcon } from "features/eventsList/helpers/getDisciplineIcon.helper";
import {
  DisciplineName,
  EventTime,
  OddsBadge,
  skeletonAnimation,
} from "./EventCard.styles";
import { Link } from "react-router-dom";

type Props = {
  event: DetailedEventModel;
};

const EventCard = ({ event }: Props) => {
  const { home_team, away_team, discipline, created_at } = event;

  return (
    <Button
      as={Link}
      to={`/event/${event.id}`}
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
        <EventTime>{new Date(created_at).toLocaleString()}</EventTime>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">
            <OddsBadge>2.12</OddsBadge>
            {home_team}
          </Text>
          <Text fontWeight="bold">
            <OddsBadge>2.18</OddsBadge>
            {away_team}
          </Text>
        </Box>
        <Badge
          borderRadius={4}
          fontSize="lg"
          colorScheme="green"
          variant="solid"
        >
          5.3%
        </Badge>
      </Flex>
    </Button>
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

export const ErrorEventCard = () => (
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
    <WarningIcon mb={2} />
    <Text>Ooops, there was a server error.</Text>
    <Text>Please try again later</Text>
  </Flex>
);

export default EventCard;
