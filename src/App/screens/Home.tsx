import * as React from "react";
import {CircularProgress, Flex, Text, Heading, Stack} from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";

const HomeScreen: React.FC = () => {
  const characters = useCharacters()
  return (
    <div className="App">
      <h1>Vite + React</h1>
      {characters && JSON.stringify(characters)}
    </div>
  )
}

export default HomeScreen;
