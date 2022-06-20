
import React from 'react';
/*import { BrowserRouter,
  Route,
  Switch } from 'react-router-dom';*/
  import {Route, BrowserRouter,Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './Pages/homePage';
import LoginPage from './Pages/loginPage';
import Register from './Pages/registerPage';
import Dashboard from './Pages/dashboardPage';
import OfferTab from './Pages/OfferTab';
import NewOffer from './Pages/NewOffer';
import NotFound from './Pages/NotFound';
import { UserProvider } from './Shared/Context/userContex';


function App() {




  return (
 
    <ChakraProvider>
      <UserProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/fichaoferta' element={<OfferTab/>} />
          <Route path='/nuevaoferta' element={<NewOffer/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>

      
      </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
