import * as React from "react";
import { Button, ButtonGroup, Flex, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";
import Card from "@/App/components/card";
import Title from "@/App/components/title";
import SearchBar from "@/App/components/searchBar";

const HomeScreen: React.FC = () => {
  const [characters, secondCharacters, searchByName] = useCharacters()
  const [pageNumber, setPageNumber] = React.useState(1)
  const [secondCharacterPageNumber, setSecondCharacterPageNumber] = React.useState(1)
  return (
    <Stack direction='row'>
      <Stack flex={1} spacing={6}>
        <Stack direction='row'>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Title>Character #1</Title>
            <Spacer />
            <SearchBar searchByName={searchByName} pageNumber={pageNumber} />
            <ButtonGroup >
              <Button onClick={() => setPageNumber(pageNumber > 0 ? pageNumber - 1: 0)} colorScheme='teal' variant='outline'>Previous</Button>
              <Button onClick={() => setPageNumber(pageNumber + 1)} colorScheme='teal' variant='outline'>Next</Button>
            </ButtonGroup>
          </Flex>
        </Stack>
        <SimpleGrid columns={3} spacing={5}>
          {characters?.results.map(item => 
              <Card key={item.id} item={item} />)}
        </SimpleGrid>
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
        {/* TODO: Remove at CharacterList component */}
        <SimpleGrid columns={3} spacing={5}>
          {secondCharacters?.results.map(item => 
              <Card key={item.id} item={item} />)}
        </SimpleGrid>
         {/* TODO: Add EpisodesList component */}
      </Stack>
    </Stack>
  )
}

export default HomeScreen;
