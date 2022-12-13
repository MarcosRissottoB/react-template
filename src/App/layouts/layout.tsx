import React from 'react'
import { Container, Center, Flex } from '@chakra-ui/react'

import Navbar from '../components/navbar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <Flex backgroundColor="gray.50" direction="column" flex={1}>
    <Navbar />
    <Center paddingY={6}>
      <Container alignSelf="center" maxWidth="12xl">
        {children}
      </Container>
    </Center>
  </Flex>
)

export default Layout
