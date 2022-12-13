import * as React from "react";

import { useCharacters } from "@/character/hooks";
import { Box, Button, ButtonGroup, Flex, Heading, Image, Input, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";
import Card from "@/App/components/card";

const HomeScreen: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("")
  const [secondSearchValue, setSecondSearchValue] = React.useState<string>("")
  const [characters, secondCharacters, searchByName] = useCharacters()

  const handleChange = (e: React.FormEvent<HTMLInputElement>, option?: boolean) => {
    setSearchValue(e.currentTarget.value);
  }
  
  return (
    <Stack direction='row'>
      <Stack flex={1} spacing={6}>
        <Stack direction='row'>
          {/* title component Character # props.number */}
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
              <Heading size='md'>Character #1</Heading>
            </Box>
            <Spacer />
            <Input placeholder='Insert name' type="text" value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} />
            <ButtonGroup>
              <Button onClick={() => searchByName(searchValue)} colorScheme='teal' variant='outline'>Search</Button>
            </ButtonGroup>
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
            {/* TODO: Remove at Title component Character */}
            <Box p='2'>
              <Heading size='md'>Character #2</Heading>
            </Box>
            <Spacer />
            {/* TODO: Remove at Search component Character */}
            <Input placeholder='Insert name' type="text" value={secondSearchValue} onChange={e => setSecondSearchValue(e.currentTarget.value)} />
            <ButtonGroup>
              <Button onClick={() => searchByName(secondSearchValue, true)} colorScheme='teal' variant='outline'>Search</Button>
            </ButtonGroup>
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
