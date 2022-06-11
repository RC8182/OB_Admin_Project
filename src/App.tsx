import logo from './logo.svg';
import React from 'react';
import './App.css';

//import FormRegister from './shared/components/pure/forms/formRegister';
import FormLogin from './shared/components/pure/forms/formLogin';


function App() {
  return (
    
    <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Proyecto Admin OpenBootCamp !!!
                 {<FormLogin />}
                </p>
                </header>      

    </div>    


  );
}

export default App;
