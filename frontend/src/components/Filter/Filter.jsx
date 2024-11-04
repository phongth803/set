import React from "react";
import { RadioGroup, Radio, HStack, Text } from "@chakra-ui/react";

const Filter = ({ value, handleChangeFilter }) => {
  return (
    <HStack spacing={4}>
      <Text>Filter:</Text>
      <RadioGroup onChange={handleChangeFilter} value={value}>
        <HStack spacing={5}>
          <Radio colorScheme="teal" value="ALL">
            All
          </Radio>
          <Radio colorScheme="teal" value="UNDONE">
            Undone
          </Radio>
          <Radio colorScheme="teal" value="DONE">
            Done
          </Radio>
        </HStack>
      </RadioGroup>
    </HStack>
  );
};

export default Filter;
