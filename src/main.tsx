import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App/screens/Home'
import './theme.css'
import theme from './theme'
import Layout from '@/App/layouts'

import { Provider as UserProvider } from './user/context';
import { Provider as CharacterProvider } from './character/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <CharacterProvider>
          <Layout>
            <App />
          </Layout>
        </CharacterProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
)
