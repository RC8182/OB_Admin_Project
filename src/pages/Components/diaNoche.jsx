import React from 'react';
import { Box, IconButton, useColorMode} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

const DiaNoche = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        
                <Box >
                    <IconButton 
                    icon={colorMode === 'light' ? SunIcon : MoonIcon } 
                    onClick={toggleColorMode}
                    variant='solid' />
                    
                </Box>
    
    );
}

export default DiaNoche;
