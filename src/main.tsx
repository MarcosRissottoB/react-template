import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

import './theme.css'
import theme from './theme'
import Layout from '@/App/layouts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
)
