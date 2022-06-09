import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Greeting from './components/pure/greeting';

function App() {
  return (
    <ChakraProvider>
      
      <p>
          {/* Pintamos el componente */}
          <Greeting/>
      </p>
    </ChakraProvider>


  );
}

export default App;
