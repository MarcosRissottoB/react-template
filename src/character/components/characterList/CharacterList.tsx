
import React from 'react'
import { Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { responseCharacter } from '@/character/types'
import Card from '@/App/components/card'

interface Props {
  characters: responseCharacter | undefined,
}

const CharacterList: React.FC<Props> = ({characters}) => {
  return (
    <SimpleGrid columns={3} spacing={1} p={1}>
      {!characters && 
        <Stack flex={1} spacing={2}>
          <Flex minWidth='max-content' direction='row' alignItems="center">
            <Text fontSize='2xl' color='teal' p={2}>First search a character</Text>
          </Flex>
        </Stack>}
      {characters?.results.map((item) => 
        <Card key={item.id} item={item} />)}
    </SimpleGrid>
  )
}

export default CharacterList