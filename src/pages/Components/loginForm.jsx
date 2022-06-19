import React, {useContext} from 'react';
import { Input, Button,Box,Checkbox, FormLabel, VStack } from '@chakra-ui/react';
import { Formik,  ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import {  useNavigate } from 'react-router-dom';
import UserContext from '../../Shared/Context/userContex';
import Dashboard from '../dashboardPage';
import LoginPage from '../loginPage';



const LoginForm = () => {

        const credential = useContext(UserContext); 
            /************* Esquema del login  *****************************/
        const loginSchema = Yup.object().shape(
            {
                email: Yup.string()
                        .email('Invalid email format')
                        .required('Email is required'),
                password: Yup.string()
                        .required('Password is required')
            }
        );
        /**************************************************** */

            const initialCredentials = {
                email: '',
                password: ''
            }
            const {navigate} = useNavigate();
    return (
        <div>
                        <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    //console.log(credential.user.email)
                    //console.log(values.password)
                    if ( credential.user.email !== values.user && credential.user.password !== values.password ){
                        alert('Ups! comprueba tus credenciales!' + JSON.stringify(values, null, 2));
                        navigate.push(<LoginPage/>);
                    }
                    else{
                        alert('Te has loguedo correctamente ' );
                        navigate.push(<Dashboard/>) ;                  
                    }

                    }}>

                
                {/* We obtain props from Formik */}
                
                {({ 
                    touched,
                    errors,
                    isSubmitting,
                    handleSubmit}) => (
                        
                        <form onSubmit={handleSubmit}>    
                        <VStack spacing={3} align={'center'} maxW="1660px" mx="auto">
                            <Box >
                            
                            <FormLabel align={'left'} htmlFor="email">Email* </FormLabel>
                            
                            <Field as={Input} id="email" type="email" name="email" placeholder="example@email.com" width={600}/>
                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <FormLabel align={'left'} >Password* </FormLabel>    
                            <Field as={Input}  id="password" name="password" placeholder="Min. 8 characters" type='password' width={600}  />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            
                            </Box>
                            <Field as={Checkbox} id="rememberMe" name="rememberMe" defaultChecked>Remember password</Field>
                            <Box>
                            
                            <Button spacing={3}
                             type="submit"
                             align={'center'}
                             color={'white'} 
                             backgroundColor='blue' 
                             width={300} > Sign In </Button> 

                            

                             {isSubmitting ? (<p>Login your credentials...</p>): null}
                              

                            </Box>
                            
                            </VStack>

                        </form>
                        

                            )}
            </Formik>
        </div>
    );
}

export default LoginForm;
