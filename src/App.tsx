import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
//import FormRegister from './shared/components/pure/forms/formRegister';
import FormLogin from './shared/components/pure/forms/formLogin';


function App() {
  return (
    
    <div className="App">
        <ChakraProvider>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Proyecto Admin OpenBootCamp !!!
                 <FormLogin />
                </p>
                </header>      
        </ChakraProvider>
    </div>    


  );
}

export default App;
