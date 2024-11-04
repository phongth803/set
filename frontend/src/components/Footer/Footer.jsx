import React from "react";
import { Text, Button, Checkbox, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Footer({ buttonName, isLogin, to }) {
  return (
    <VStack gap={2} alignItems="start" width="100%">
      {isLogin && (
        <Checkbox colorScheme="teal" defaultChecked>
          Remember me
        </Checkbox>
      )}
      <Button colorScheme="teal" variant="solid" type="submit" width={"100%"}>
        {buttonName}
      </Button>
      <Text>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <Link to={to} style={{ color: "teal" }}>
          {`${buttonName} here`}
        </Link>
      </Text>
    </VStack>
  );
}

export default Footer;
