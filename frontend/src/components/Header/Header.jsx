import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
function Header({ title, subtitle }) {
  return (
    <VStack gap={2} alignItems="start">
      <Heading fontSize="30">{title}</Heading>
      <Text fontSize={18}>{subtitle}</Text>
    </VStack>
  );
}

export default Header;
