import React from "react";
import {CircularProgress, Center, Flex, Text} from "@chakra-ui/react";

import { responseCharacter } from "./types"
import api from "./api";

export interface Context {
  state: {
    characters: responseCharacter | undefined,
    secondCharacters: responseCharacter | undefined
  };
  actions: {
    searchByName: (name: string, pageNumber: number, option?: boolean) => Promise<void>;
  };
}

const CharactersContext = React.createContext({} as Context);

interface Props {
  children: React.ReactNode
}

const CharactersProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = React.useState<responseCharacter | undefined>();
  const [secondCharacters, setSecondCharacters] = React.useState<responseCharacter | undefined>();
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected" >("resolved")

  async function handleSearchByName(name: string, pageNumber: number, option?: boolean) {
    try {
      const response = await api.characters.findByName(name, pageNumber)
      if (option) {
        setSecondCharacters(response)
      } else {
        setCharacters(response);
      }
      setStatus("resolved");
    } catch(error) {
      console.log("error", error)
      setStatus("rejected")
    }
  }

  if (status === "rejected") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <Text backgroundColor="primary.100" borderRadius="md" color="primary.700" padding={4}>
          Action rejected
        </Text>
      </Flex>
    );
  }

  if (status === "pending") {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Center>
    );
  }

  const state : Context["state"] = {
    characters,
    secondCharacters
  };
  const actions = {
    searchByName: handleSearchByName,
  };
  return <CharactersContext.Provider value={{state, actions}}>{children}</CharactersContext.Provider>
}

export { CharactersContext as default, CharactersProvider as Provider }