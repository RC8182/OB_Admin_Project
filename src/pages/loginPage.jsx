import LogoIcono from '../Assets/LogoIcono.png'

import {  Stack, Box,Image,Text, Divider } from '@chakra-ui/react';
import React, {/* useState*/ } from 'react';
import GoogleLogin from 'react-google-login';
import DiaNoche from './Components/diaNoche';
import LoginForm from './Components/loginForm';


const LoginPage = () => {


    /******** CONSTANTES PARA FORMIK Y GOOGLE LOGIN ******/
    const responseGoogle=(response)=>{console.log(response)/* Creamos la funcion para la respuesta de Google */} 
    /******************************************************/

    return (
                
        <div align={'center' } maxW="1660px" mx="auto" >
            

            <Box align={'rigth' } maxW="1660px" mx="auto">
                            <h1 > OR - ADMIN </h1>
                            </Box>
                            <br/>
                            
                            <Box boxSize='100px' >
                                <Image src={LogoIcono} alt='Dan Abramov'  />
                            </Box>
                            <br/>
                            <br/>
                           

                        <Stack align={'center'} maxW="1660px" mx="auto">
                        
                        <h1 > Login with Google </h1>
                        <br/>
                        <Box align={'left'} maxW="1860px" mx="auto">
                        <GoogleLogin 
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Sign in whit Google "
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}/>
                            <br/>
                        </Box>
                        <Stack direction='row' h='1px' p={8}  width={600}>
                        <Divider orientation='horizontal' />
                            <Text height={32}>OR</Text>
                            <Divider orientation='horizontal' />    
                        </Stack>
                        </Stack>

                        <LoginForm/>
            

            <br/>
        <DiaNoche/>
        </div>
                    
                      
                 
            
 
    );
}

export default LoginPage;
