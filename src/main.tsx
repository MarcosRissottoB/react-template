import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import './theme.css'
import theme from './theme'
import HomeScreen from '@/App/screens/Home'
import Layout from '@/App/layouts'

import { Provider as UserProvider } from './user/context';
import { Provider as CharactersProvider } from './character/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <CharactersProvider>
          <Layout>
           <HomeScreen />
          </Layout>
        </CharactersProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
)
