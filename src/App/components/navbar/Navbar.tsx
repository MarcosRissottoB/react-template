
import React from 'react'
import { Box, Container, Stack, Image, Text } from '@chakra-ui/react'
import logo from '@/assets/images/logo.svg'

const Navbar: React.FC = () => {
  return (
    <Box backgroundColor="white" boxShadow="md">
      <Container maxW="6xl">
        <Stack alignItems="center" as="nav" direction="row" justifyContent="space-between" paddingY={1}>
          <Image height={20} width={20} src={logo} alt="Logo"/>
          <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
            <Text>John Doe</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar