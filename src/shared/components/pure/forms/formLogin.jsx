import { Input, Stack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

const LoginForm = () => {

    const initialCredentials = [{user: "", password : ""}];

    const [credentials , setCredentials] = useState(initialCredentials)

    const responseGoogle=(response)=>{console.log(response)/* Creamos la funcion para la respuesta de Google */} 

    return (
                    
        <form>
              <h1> Login with Google </h1>
              <br/>
              <GoogleLogin id='g'
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign in whit Google "
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
                <br/>

               <h1 id='separador'> or </h1> 
               
            <Stack spacing={3}>
                <h5 align='left'>Email* </h5>
                <Input placeholder='mail@example.com'  />

                <h5 align='left'>Password* </h5>    
                <Input placeholder='Min. 8 characters' />

                <Button type='submit' color={'white'} backgroundColor='blue' > Sign In </Button>

            </Stack>
        </form>
    );
}

export default LoginForm;
