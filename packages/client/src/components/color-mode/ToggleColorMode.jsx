import React from 'react'
import {useColorMode} from "@chakra-ui/color-mode";
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import {Button} from '@chakra-ui/button'
import { Box, IconButton } from '@chakra-ui/core';

export default function ToggleColorMode() {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
    <Button onClick = {() => toggleColorMode()} 
       pos="absolute" 
       top="0"
       right="0"
       m="1rem"
    >
        {colorMode === 'dark' ? 
        (<SunIcon color="orange"/>) : 
        (<MoonIcon color="blue.700"/>)}
    </Button>
    </>
    
  )
}
