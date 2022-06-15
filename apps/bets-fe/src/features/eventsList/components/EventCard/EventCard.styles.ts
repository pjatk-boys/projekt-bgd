import { Badge, chakra, Text } from "@chakra-ui/react";

export const DisciplineName = chakra(Text, {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "gray.400",
  },
});

export const EventTime = chakra(Text, {
  baseStyle: {
    fontSize: "xs",
    color: "gray.400",
  },
});

export const OddsBadge = chakra(Badge, {
  baseStyle: {
    mr: 2,
  },
});
