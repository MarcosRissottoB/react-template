import React, { useEffect } from 'react'
import { Button, ButtonGroup, Flex, Input, Stack } from '@chakra-ui/react'

interface searchProps {
  searchByName: (value: string, pageNumber: number, option?: boolean | undefined) => void
  pageNumber: number
  isSecondCharacter?: boolean
}

const SearchBar: React.FC<searchProps> = ({searchByName, pageNumber, isSecondCharacter = false} :searchProps) => {
  const [searchValue, setSearchValue] = React.useState<string>("")

  const handleSearch = (searchValue: string, pageNumber: number, isSecondCharacter: boolean) => {
    if (searchValue.length > 3) {
      searchByName(searchValue, pageNumber, isSecondCharacter)
    }
  }

  useEffect(() => {
    handleSearch(searchValue, pageNumber, isSecondCharacter)
  }, [pageNumber])

  return (
    <Stack direction='row'>
      <Flex minWidth='max-content' gap='2'  p={2}>
        <Input placeholder='Insert name' type="text" value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)} />
        <ButtonGroup>
          <Button onClick={() => handleSearch(searchValue, pageNumber, isSecondCharacter)} colorScheme='teal' variant='outline'>Search</Button>
        </ButtonGroup>
      </Flex>
    </Stack>
  )
}

export default SearchBar