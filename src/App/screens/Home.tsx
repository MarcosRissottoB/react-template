import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Flex, Grid, GridItem, Spacer, Stack, Text } from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";
import Title from "@/App/components/title";
import SearchBar from "@/App/components/searchBar";
import CharacterList from "@/character/components/characterList";

const HomeScreen: React.FC = () => {
  const [characters, secondCharacters, searchByName] = useCharacters()
  const [pageNumber, setPageNumber] = useState(1)
  const [secondCharacterPageNumber, setSecondCharacterPageNumber] = useState(1)
  const [firstCharacterEpisodes, setFirstCharacterEpisodes] = useState<string[]>([]) 
  const [secondCharacterEpisodes, setSecondCharacterEpisodes] = useState<string[]>([])
  const [sharedEpisodes, setSharedEpisodes] = useState<string[]>([])

  const splitEpisode = (episodes: string[] | undefined) => {
    const arryayElements = episodes?.map((episode: string) => episode.split("/"))
    const episodeNumbers = arryayElements?.map(item => `Episode - ${item[5]}`)
    return episodeNumbers
  }

  useEffect(() => {
    const episodes = splitEpisode(characters?.results[0].episode)
    setFirstCharacterEpisodes(episodes)
  }, [characters])

  useEffect(() => {
    const episodes = splitEpisode(secondCharacters?.results[0].episode)
    setSecondCharacterEpisodes(episodes)
  }, [secondCharacters])

  const handleSharedEpisodes = (firstCharacterEpisodes: string[], secondCharacterEpisodes: string[]) => {
    const episodes = firstCharacterEpisodes.filter(episode => secondCharacterEpisodes.includes(episode))
    console.log("episodes", episodes);
    setSharedEpisodes(episodes)
  }

  useEffect(() => {
    if (firstCharacterEpisodes && secondCharacterEpisodes) {
      handleSharedEpisodes(firstCharacterEpisodes, secondCharacterEpisodes)
    }
  }, [firstCharacterEpisodes, secondCharacterEpisodes])

  return (
    <Grid
        // h="800px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap={2}
      > 
        <GridItem rowSpan={1}>
          <Grid
            h="500px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={2}
          >
            <GridItem colSpan={3} >
              <Box border="1px" borderColor="gray.200" height="500px">
                <Stack flex={1} spacing={2}>
                  <Stack direction="row">
                    <Flex minWidth="max-content" gap="0" direction="row" alignItems="center">
                      <Title>Character #1</Title>
                      <Spacer />
                      <SearchBar searchByName={searchByName} pageNumber={pageNumber}/>
                      <ButtonGroup >
                        <Button onClick={() => setPageNumber((pageNumber > 0) ? pageNumber - 1: 0)} colorScheme="teal" variant="outline">Previous</Button>
                        <Button onClick={() => setPageNumber((characters && pageNumber < characters.info.pages) ? pageNumber + 1 : pageNumber)} colorScheme="teal" variant="outline">Next</Button>
                      </ButtonGroup>
                    </Flex>
                  </Stack>
                  <CharacterList characters={characters} />
                </Stack>
              </Box>
            </GridItem>
            <GridItem colSpan={3}>
              <Box border="1px" borderColor="gray.200" height="500px">
                <Stack flex={1} spacing={2}>
                  <Stack direction="row">
                    <Flex minWidth="max-content" gap="0" direction="row" alignItems="center">
                      <Title>Character #2</Title>
                      <Spacer />
                      <SearchBar searchByName={searchByName} pageNumber={secondCharacterPageNumber} isSecondCharacter={true} />
                      <ButtonGroup >
                        <Button onClick={() => setSecondCharacterPageNumber(secondCharacterPageNumber - 1)} colorScheme="teal" variant="outline">Previous</Button>
                        <Button onClick={() => setSecondCharacterPageNumber((secondCharacters && secondCharacterPageNumber < secondCharacters.info.pages) ? secondCharacterPageNumber + 1 : secondCharacterPageNumber)} colorScheme="teal" variant="outline">Next</Button>
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
          minHeight="500px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={2}
          bg="teal"
        >
          <GridItem colSpan={(characters && secondCharacters) ? 2:3}>
            <Title>Character #1 - Episodes</Title>
            <Box border="1px" borderColor="gray.200" minHeight="500px">
              {characters && firstCharacterEpisodes?.map(episode => <Title key={episode}>{episode}</Title>)}
            </Box>
          </GridItem>
          {(characters && secondCharacters) && <GridItem colSpan={2}>
            <Title>Character #1 & #2 - Shared Episodes</Title>
            <Stack direction="row">
              <Box border="1px" borderColor="gray.200" minHeight="500px">
                {(sharedEpisodes.length) > 0 ? (sharedEpisodes?.map(episode => <Text key={episode}>{episode}</Text>)) : <Text>These character have no shared episodes</Text>}
              </Box>
            </Stack>
          </GridItem>}
          <GridItem colSpan={(characters && secondCharacters) ? 2:3}>
            <Title>Character #2 - Episodes</Title>
            <Box border="1px" borderColor="gray.200" minHeight="500px">
              {secondCharacters && secondCharacterEpisodes?.map(episode => <Title key={episode}>{episode}</Title>)}
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
    
  )
}

export default HomeScreen;
