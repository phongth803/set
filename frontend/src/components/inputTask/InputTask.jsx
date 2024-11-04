import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "@/redux/actions";
function InputTask({ placeholder }) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (value) {
      dispatch(addTodoRequest(value));
      setValue("");
      setIsActive(false);
    }
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsActive(false);
    }
  };
  return (
    <Flex
      w={"100%"}
      h={"72px"}
      borderRadius={"12px"}
      justify={"space-between"}
      padding={"0 24px"}
      align={"center"}
      direction={"row"}
    >
      <Flex h={"32px"} w={"100%"} gap={4} align={"center"}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0001 8.59277V17.3844"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4001 12.9885H8.6001"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.6229 1H7.37714C3.45714 1 1 3.7745 1 7.70219V18.2978C1 22.2255 3.44571 25 7.37714 25H18.6229C22.5543 25 25 22.2255 25 18.2978V7.70219C25 3.7745 22.5543 1 18.6229 1Z"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          size={"16px"}
          colorScheme="#A0AEC0"
          border="none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
        />

        <Button
          fontSize={"14px"}
          fontWeight={"600"}
          minWidth={"84px"}
          colorScheme="teal"
          variant="solid"
          size="sm"
          onClick={handleAddTask}
          type="submit"
        >
          Add new
        </Button>
        {isActive && (
          <Button
            fontSize={"14px"}
            fontWeight={"600"}
            minWidth={"72px"}
            colorScheme="red"
            variant="solid"
            size="sm"
            onClick={() => {
              setValue("");
              setIsActive(false);
            }}
          >
            Cancel
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default InputTask;
