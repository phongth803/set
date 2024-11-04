import {
  FormErrorMessage,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

function InputForm(props) {
  const { title, placeholder, errorMessage, register, type } = props;
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel>{title}</FormLabel>
      <Input
        color={errorMessage ? "red" : "initial"}
        size="md"
        variant="outline"
        placeholder={placeholder}
        {...register}
        type={type ? type : "text"}
      />
      {errorMessage && (
        <FormErrorMessage fontWeight={"400"} size={"12px"} lineHeight={"16px"}>
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export default InputForm;
