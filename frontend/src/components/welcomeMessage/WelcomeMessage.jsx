import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const WelcomeMessage = ({ userName }) => {
  return (
    <Flex
      w={"100%"}
      direction={"row"}
      align="center"
      justify="space-between"
      padding={"0 24px"}
      bg="white"
      minHeight={"40px"}
    >
      <Text fontSize={"18px"} lineHeight={"28px"} fontWeight={"600"}>
        Welcome, {userName}
      </Text>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
          fill="#1F2A37"
        />
        <path
          d="M25 24L29 20M29 20L25 16M29 20H15M21 24V25C21 25.7956 20.6839 26.5587 20.1213 27.1213C19.5587 27.6839 18.7956 28 18 28H14C13.2044 28 12.4413 27.6839 11.8787 27.1213C11.3161 26.5587 11 25.7956 11 25V15C11 14.2044 11.3161 13.4413 11.8787 12.8787C12.4413 12.3161 13.2044 12 14 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15V16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Flex>
  );
};

export default WelcomeMessage;
