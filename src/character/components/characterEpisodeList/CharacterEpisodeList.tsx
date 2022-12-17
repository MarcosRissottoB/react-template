
import React from 'react'
import { Box, Grid, GridItem, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";

import { responseCharacter } from '@/character/types'
import Title from "@/App/components/title";

interface Props {
  characters: responseCharacter | undefined,
  secondCharacters: responseCharacter | undefined,
  firstCharacterEpisodes: string[],
  secondCharacterEpisodes: string[],
  sharedEpisodes: string[],
}

const CharacterEpisodeList: React.FC<Props> = ({
  characters,
  secondCharacters,
  firstCharacterEpisodes,
  secondCharacterEpisodes,
  sharedEpisodes
}) => {
  return (
    <Grid
      minHeight="450px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={2}
    >
      <GridItem colSpan={(characters && secondCharacters) ? 2:3}  bg="teal">
        <Title>Character #1 - Episodes</Title>
        <Box border="1px" borderColor="gray.200" maxW="100%" minHeight="450px">
          <SimpleGrid columns={4} spacing={1} p={1}>
            {characters && firstCharacterEpisodes?.map(episode => <Text key={episode} color="black" width="100px">{episode}</Text>)}
          </SimpleGrid>
        </Box>
      </GridItem>
      {(characters && secondCharacters) && <GridItem colSpan={2}  bg="teal">
        <Title>Character #1 & #2 - Shared Episodes</Title>
        <Box border="1px" borderColor="gray.200" maxW="100%" minHeight="450px">
          <SimpleGrid columns={4} spacing={1} p={1}>
            {(sharedEpisodes.length) > 0 ? (sharedEpisodes?.map(episode => <Text key={episode} color="black" width="100px">{episode}</Text>)) : <Text color="black" width="100px">These characters have no shared episodes</Text>}
          </SimpleGrid>
        </Box>
          {/* <Stack direction="row">
            {(sharedEpisodes.length) > 0 ? (sharedEpisodes?.map(episode => <Text key={episode} color="black" width="100px">{episode}</Text>)) : <Text color="black" width="100px">These characters have no shared episodes</Text>}
          </Stack> */}

      </GridItem>}
      <GridItem colSpan={(characters && secondCharacters) ? 2:3}  bg="teal">
        <Title>Character #2 - Episodes</Title>
        <Box border="1px" borderColor="gray.200" maxW="100%" minHeight="450px">
          <SimpleGrid columns={4} spacing={1} p={1}>
            {secondCharacters && secondCharacterEpisodes?.map(episode => <Text key={episode} color="black" width="100px">{episode}</Text>)}
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default CharacterEpisodeList