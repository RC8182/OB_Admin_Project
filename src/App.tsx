
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register'
import NotFound from './pages/NotFound';
import OfferTab from './pages/OfferTab';
import NewOffer from './pages/NewOffer';
import { BrowserRouter,
  Route,
  Routes } from 'react-router-dom';
;
import { ChakraProvider } from '@chakra-ui/react'




function App() {
  return (
 
    <ChakraProvider>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/fichaoferta' element={<OfferTab/>} />
        <Route path='/nuevaoferta' element={<NewOffer/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    
    </BrowserRouter>
   </ChakraProvider>
  );
}

export default App;
