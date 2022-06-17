import { Badge, chakra, Flex, Text, keyframes } from "@chakra-ui/react";

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

export const Subtitle = chakra(Text, {
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

export const skeletonAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
