import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorModeProvider } from "@chakra-ui/color-mode"
import {ChakraProvider} from '@chakra-ui/provider'
import theme from './theme.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme = {theme}>
      <ColorModeProvider initialColorMode = {theme.config.initialColorMode}/>
      <App />
    </ChakraProvider> 
    </BrowserRouter>
    
  </React.StrictMode>,
)
