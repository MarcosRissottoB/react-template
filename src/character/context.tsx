import React from "react";
import {CircularProgress, Center} from "@chakra-ui/react";

import { Character } from "./types"
import api from "./api";

export interface Context {
  state: {characters: Character[]},
}

const CharacterContext = React.createContext({} as Context);

type Props = {
  children?: React.ReactNode;
}

const CharacterProvider: React.FC = (props: Props) => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected" >("pending")


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

  return <><CharacterContext.Provider value={{state}}>{props.children}</CharacterContext.Provider></>
}

export {  CharacterContext as default, CharacterProvider as Provider }