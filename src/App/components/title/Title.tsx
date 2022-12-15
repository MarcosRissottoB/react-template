import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Title: React.FC<Props> = ({children}) => {
  return (
    <Box p='2'>
      <Heading size='md'>{children}</Heading>
    </Box>
  )
}

export default Title