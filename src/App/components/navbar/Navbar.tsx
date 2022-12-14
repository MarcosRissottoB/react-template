
import React from 'react'
import { Box, Container, Stack, Image, Text } from '@chakra-ui/react'

import logo from '@/assets/images/logo.svg'
import { useUser } from '@/user/hooks'

const Navbar: React.FC = () => {
  const user = useUser()
  
  return (
    <Box backgroundColor="white" boxShadow="md" maxHeight="6xl">
      <Container maxW="6xl">
        <Stack alignItems="center" as="nav" direction="row" justifyContent="space-between" paddingY={1}>
          <Box>
            <Image height={20} width={40} src={logo} alt="Logo"/>
          </Box>
          <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
            <Text>{user.name}</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar