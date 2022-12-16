import * as React from "react";
import { Stack } from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";

import CharacterList from "@/character/components/characterList";

const HomeScreen: React.FC = () => {
  const [characters, secondCharacters, searchByName] = useCharacters()

  return (
    <Stack direction='row'>
      <Stack flex={1} spacing={2}>
        <CharacterList characters={characters} searchByName={searchByName}/>
      </Stack>
      <Stack flex={1} spacing={2}>
        <CharacterList characters={secondCharacters} searchByName={searchByName}/>
         {/* TODO: Add EpisodesList component */}
      </Stack>
    </Stack>
  )
}

export default HomeScreen;
