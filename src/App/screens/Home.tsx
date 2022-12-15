import * as React from "react";
import { Flex, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";

import { useCharacters } from "@/character/hooks";
import Card from "@/App/components/card";
import Title from "@/App/components/title";
import SearchBar from "@/App/components/searchBar";

const HomeScreen: React.FC = () => {
  const [characters, secondCharacters, searchByName] = useCharacters()

  return (
    <Stack direction='row'>
      <Stack flex={1} spacing={6}>
        <Stack direction='row'>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Title>Character #1</Title>
            <Spacer />
            <SearchBar searchByName={searchByName}/>
          </Flex>
        </Stack>
        <SimpleGrid columns={3} spacing={5}>
          {characters?.results.map(item => 
              <Card key={item.id} item={item} />)}
        </SimpleGrid>
      </Stack>
      <Stack flex={1} spacing={6}>
        <Stack direction='row'>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Title>Character #2</Title>
            <Spacer />
            <SearchBar searchByName={searchByName} isSecondCharacter={true}/>
          </Flex>
        </Stack>
        {/* TODO: Remove at Grid component Character */}
        <SimpleGrid columns={3} spacing={5}>
          {secondCharacters?.results.map(item => 
              <Card key={item.id} item={item} />)}
        </SimpleGrid>
         {/* TODO: Add Grid component to episodes */}
      </Stack>
    </Stack>
  )
}

export default HomeScreen;
