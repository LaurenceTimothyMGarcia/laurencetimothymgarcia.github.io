import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

// Look like a ds screen

function GameDevProjectCard() {
  return (
    <Box 
      bg={'green'} 
      align={'center'}
      pt={'1%'}
      pb={'1%'}
    >
      <Heading
        bg={'white'}
        maxW={'90%'}
        pt={'1%'}
        pb={'1%'}
        textColor={'black'}
      >
        Gunslinger Hilda
      </Heading>
      
      <Image 
        src='/logos/ProjectIcons/GunslingerHilda.png'
        minW={'90%'}
        maxW={'90%'}
      />
    </Box>
  )
}

export default GameDevProjectCard;