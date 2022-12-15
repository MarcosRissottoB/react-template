import React from 'react'
import { Box, Button, ButtonGroup, Input } from '@chakra-ui/react'

interface searchProps {
  searchByName: (value: string, option?: boolean | undefined) => void
  isSecondCharacter?: boolean
}

const SearchBar: React.FC<searchProps> = ({searchByName, isSecondCharacter = false} :searchProps) => {
  const [searchValue, setSearchValue] = React.useState<string>("")

  const handleSearch = (searchValue: string, isSecondCharacter: boolean) => {
    if (searchValue.length > 3) {
      searchByName(searchValue, isSecondCharacter)
    }
  }

  return (
    <Box>
      <Input placeholder='Insert name' type="text" value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)} />
      <ButtonGroup>
        <Button onClick={() => handleSearch(searchValue, isSecondCharacter)} colorScheme='teal' variant='outline'>Search</Button>
      </ButtonGroup>
    </Box>
  )
}

export default SearchBar