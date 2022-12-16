import * as React from "react";
import { Button, ButtonGroup, Flex, Spacer, Stack } from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";
import Title from "@/App/components/title";
import SearchBar from "@/App/components/searchBar";
import CharacterList from "@/character/components/characterList";

const HomeScreen: React.FC = () => {
  const [characters, secondCharacters, searchByName] = useCharacters()
  const [pageNumber, setPageNumber] = React.useState(1)
  const [secondCharacterPageNumber, setSecondCharacterPageNumber] = React.useState(1)
  return (
    <Stack direction='row'>
      <Stack flex={1} spacing={2}>
        <Stack direction='row'>
          <Flex minWidth='max-content' gap='0' direction='row' alignItems="center">
            <Title>Character #1</Title>
            <Spacer />
            <SearchBar searchByName={searchByName} pageNumber={pageNumber} />
            <ButtonGroup >
              <Button onClick={() => setPageNumber(pageNumber > 0 ? pageNumber - 1: 0)} colorScheme='teal' variant='outline'>Previous</Button>
              <Button onClick={() => setPageNumber(pageNumber + 1)} colorScheme='teal' variant='outline'>Next</Button>
            </ButtonGroup>
          </Flex>
        </Stack>
        <CharacterList characters={characters} />
      </Stack>
      <Stack flex={1} spacing={2}>
        <Stack direction='row'>
          <Flex minWidth='max-content' gap='0' direction='row' alignItems="center">
            <Title>Character #2</Title>
            <Spacer />
            <SearchBar searchByName={searchByName} pageNumber={secondCharacterPageNumber} isSecondCharacter={true}/>
            <ButtonGroup >
              <Button onClick={() => setSecondCharacterPageNumber(secondCharacterPageNumber - 1)} colorScheme='teal' variant='outline'>Previous</Button>
              <Button onClick={() => setSecondCharacterPageNumber(secondCharacterPageNumber + 1)} colorScheme='teal' variant='outline'>Next</Button>
            </ButtonGroup>
          </Flex>
        </Stack>
       <CharacterList characters={secondCharacters} />
         {/* TODO: Add EpisodesList component */}
      </Stack>
    </Stack>
  )
}

export default HomeScreen;
