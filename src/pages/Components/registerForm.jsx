import React from 'react';
import { Box, ChakraProvider, Container, Text,Link, Input, Button, VStack} from '@chakra-ui/react';

import { theme } from '../../Theme/chakraConfig';
import DiaNoche from './diaNoche';

const RegisterForm = () => {
    return (
        <div>
            <ChakraProvider theme={theme}  >
             <h1 align={'left'}> OB - Admin</h1>
                <Container align={'left'} >
                    <Box borderWidth='1px' borderRadius= 'lg' p={4}>
                    <Text fontSize='2xl' align='center'> Create Account </Text>
                        <VStack>
                        spacing=(2)
                        align='stretch'
                            <Input placeholder='User Name' />
                            <Input placeholder='Name' />
                            <Input placeholder='Last Name' />
                            <Input placeholder='email' />
                            <Input placeholder='Password' />
                            <Input placeholder='Confirm you Password' />
                            <Button color={'white'}  background={'blue'} variant='solid' w="80%"> Create Account </Button>
                            <Text fontSize='md' align='center'> Already have an Account? <Link href="/login" color={"blue"} > Log in</Link> </Text>

                        </VStack>

                    <DiaNoche/>
                    </Box>
                </Container>
            </ChakraProvider> 
        </div>
    );
}

export default RegisterForm;
