import LogoIcono from '../assets/LogoIcono.png'
import './CSS/Page.css'
import { Input, Stack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';


const Login = () => {

    const initialCredentials = [{user: "", password : ""}];

    const [credentials , setCredentials] = useState(initialCredentials)

    const responseGoogle=(response)=>{console.log(response)/* Creamos la funcion para la respuesta de Google */} 

    return (

        <div id='login'>
            <h1 id='title'> OR - ADMIN </h1>
                    <br/>
                    <div className="logo" >
                    <img src={LogoIcono} width="150" height="100"  />
                    </div>
        <form    >
              <h1 id='title'> Login with Google </h1>
              <br/>
              <GoogleLogin id='g'
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign in whit Google "
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
                <br/>

               <h1 id='separador'> or </h1> 
               
            <Stack spacing={3} >
                <h5 align='left' >Email* </h5>
                <Input  id='formulario' placeholder='mail@example.com' color='white' width={600} />

                <h5 align='left'>Password* </h5>    
                <Input id='formulario' placeholder='Min. 8 characters' color='white' width={600}  />
                <br/>
                <Button id='formulario' type='submit' color={'white'} backgroundColor='blue' width={300} > Sign In </Button>
                <br/>

            </Stack>
        </form>
        
        </div>
 
    );
}

export default Login;
