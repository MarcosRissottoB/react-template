
import React from 'react'
import { Button, ButtonGroup, Flex, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react'

import { responseCharacter } from '@/character/types'
import Card from '@/App/components/card'
import Title from "@/App/components/title";
import SearchBar from "@/App/components/searchBar";

interface Props {
  characters: responseCharacter | undefined,
  searchByName: (value: string, pageNumber: number, option?: boolean | undefined) => void
}

const CharacterList: React.FC<Props> = ({characters, searchByName}) => {
  const [pageNumber, setPageNumber] = React.useState(1)

  return (
    <Stack flex={1} spacing={2}>
        <Stack direction='row'>
          <Flex minWidth='max-content' gap='0' direction='row' alignItems="center">
            <Title>Character #1</Title>
            <Spacer />
            <SearchBar searchByName={searchByName} pageNumber={pageNumber}/>
            <ButtonGroup >
              <Button onClick={() => setPageNumber(pageNumber > 0 ? pageNumber - 1: 0)} colorScheme='teal' variant='outline'>Previous</Button>
              <Button onClick={() => setPageNumber(pageNumber + 1)} colorScheme='teal' variant='outline'>Next</Button>
            </ButtonGroup>
          </Flex>
        </Stack>
    <SimpleGrid columns={3} spacing={3}>
      {!characters && 
        <Stack flex={1} spacing={2}>
          <Flex minWidth='max-content' direction='row' alignItems="center">
            <Text fontSize='2xl' color='teal'>First search a character</Text>
          </Flex>
        </Stack>}
      {characters?.results.map((item) => 
        <Card key={item.id} item={item} />)}
    </SimpleGrid>
    </Stack>
  )
}

export default CharacterList