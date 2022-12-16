import * as React from "react";
import { Box, Button, ButtonGroup, Flex, Grid, GridItem, Spacer, Stack } from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";
import Title from "@/App/components/title";
import SearchBar from "@/App/components/searchBar";
import CharacterList from "@/character/components/characterList";

const HomeScreen: React.FC = () => {
  const [characters, secondCharacters, searchByName] = useCharacters()
  const [pageNumber, setPageNumber] = React.useState(1)
  const [secondCharacterPageNumber, setSecondCharacterPageNumber] = React.useState(1)
  
  return (
    <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(1, 1fr)'
        gap={4}
      > 
        <GridItem rowSpan={1}>
          <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={2}
          >
            <GridItem colSpan={3}>
              <Box border='1px' borderColor='gray.200'>
                <Stack flex={1} spacing={2}>
                  <Stack direction='row'>
                    <Flex minWidth='max-content' gap='0' direction='row' alignItems="center">
                      <Title>Character #1</Title>
                      <Spacer />
                      <SearchBar searchByName={searchByName} pageNumber={pageNumber}/>
                      <ButtonGroup >
                        <Button onClick={() => setPageNumber((pageNumber > 0) ? pageNumber - 1: 0)} colorScheme='teal' variant='outline'>Previous</Button>
                        <Button onClick={() => setPageNumber((characters && pageNumber < characters.info.pages) ? pageNumber + 1 : pageNumber)} colorScheme='teal' variant='outline'>Next</Button>
                      </ButtonGroup>
                    </Flex>
                  </Stack>
                  <CharacterList characters={characters} />
                </Stack>
              </Box>
            </GridItem>
            <GridItem colSpan={3}>
              <Box border='1px' borderColor='gray.200'>
                <Stack flex={1} spacing={2}>
                  <Stack direction='row'>
                    <Flex minWidth='max-content' gap='0' direction='row' alignItems="center">
                      <Title>Character #2</Title>
                      <Spacer />
                      <SearchBar searchByName={searchByName} pageNumber={secondCharacterPageNumber} isSecondCharacter={true} />
                      <ButtonGroup >
                        <Button onClick={() => setSecondCharacterPageNumber(secondCharacterPageNumber - 1)} colorScheme='teal' variant='outline'>Previous</Button>
                        <Button onClick={() => setSecondCharacterPageNumber((secondCharacters && secondCharacterPageNumber < secondCharacters.info.pages) ? secondCharacterPageNumber + 1 : secondCharacterPageNumber)} colorScheme='teal' variant='outline'>Next</Button>
                      </ButtonGroup>
                    </Flex>
                  </Stack>
                  <CharacterList characters={secondCharacters} />
                </Stack>
                </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem rowSpan={1}>
        <Grid
          h='400px'
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(6, 1fr)'
          gap={2}
        >
          <GridItem colSpan={2}>
            <Box border='1px' borderColor='gray.200' height='500px'>
              <Title>EpisodesList</Title>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box border='1px' borderColor='gray.200' height='500px'>
              <Title>Share EpisodesList</Title>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box border='1px' borderColor='gray.200' height='500px'>
            <Title>EpisodesList</Title>
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
    
  )
}

export default HomeScreen;
