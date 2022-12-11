import * as React from "react";
import {CircularProgress, Flex, Text, Heading, Stack} from "@chakra-ui/react";

import { Character } from "@/character/types";
import api from "@/character/api";

const HomeScreen: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");

  React.useEffect(() => {
    api
      .list()
      .then((characters) => {
        setCharacters(characters);
        setStatus("resolved");
      })
      .catch(() => {
        setCharacters([]);
        setStatus("rejected");
      });
  }, []);
  
  if (status === "rejected") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <Text backgroundColor="primary.100" borderRadius="md" color="primary.700" padding={4}>
          Press F to pay respect
        </Text>
      </Flex>
    );
  }

  if (status === "pending") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Flex>
    );
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      {JSON.stringify(characters)}
    </div>
  )
}

export default HomeScreen;
