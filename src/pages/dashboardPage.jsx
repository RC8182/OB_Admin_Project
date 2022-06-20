import LogoIcono from '../Assets/LogoIcono.png'
import React, {useContext} from 'react';
import {  useNavigate } from 'react-router-dom';
import {  Box,Image } from '@chakra-ui/react';
import UserContext from '../Shared/Context/userContex';



const Dashboard = () => {

    const credential = useContext(UserContext);    

        const navigate = useNavigate();

        function logout(){

            return navigate('/');
        }

    return (
        <div align={'center' }>
            <Box  maxW="1660px" mx="auto">
                            <h1 > Dashboard </h1>
                            </Box>
                            <br/>
                            
                            <Box boxSize='100px' >
                                <Image src={LogoIcono} alt='OB Icon'  />
                            </Box>
                            <br/>
            <h1 > Te has logueado correctamente! {credential.user.name} </h1>
            <button onClick={logout} > Log out</button>
         
            
        </div>
    );
}

export default Dashboard;
