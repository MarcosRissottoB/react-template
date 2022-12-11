import React from "react";
import {CircularProgress, Center, Flex, Text} from "@chakra-ui/react";

import { Character } from "./types"
import api from "./api";

export interface Context {
  state: {characters: Character[]},
}

const CharactersContext = React.createContext({} as Context);

interface Props {
  children: React.ReactNode
}

const CharactersProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected" >("pending")

  React.useEffect(() => {
    api.searchByName().then((characters) => {
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


  if (!characters || status === "pending") {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Center>
    );
  }

  const state : Context["state"] = {
    characters
  };

  return <><CharactersContext.Provider value={{state}}>{children}</CharactersContext.Provider></>
}

export { CharactersContext as default, CharactersProvider as Provider }